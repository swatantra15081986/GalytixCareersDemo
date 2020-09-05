const pp = require('papaparse');
const fs = require('fs');
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'info';
// const file = fs.readFileSync('../utils/sampleOrderFile.csv', 'utf8');
// const updateFile = fs.readFileSync('../data/WMS/orderFile/qa_OrderFile.csv', 'utf8');
// const dfilepath = '../data/WMS/orderFile/qa_OrderFile.csv';

exports.updateOrderCsvFile = async (file, clientUuid, destinationFilePath, createOrUpdate, dataObj, orderIndex) => {
    var ordersArr = [];
    var shipmentsArr = [];
    var workflowArr = [];
    this.file = file;
    this.clientUuid = clientUuid;
    this.dataObj = dataObj;
    this.createOrUpdate = createOrUpdate;
    this.orderIndex = orderIndex;
    var arr = await updateOrders(file, clientUuid, createOrUpdate, dataObj, orderIndex);
    arr.map((obj, i) => {
        ordersArr.push(obj.order_number);
        shipmentsArr.push(obj.shipment_number);
        workflowArr.push(obj.shipment_workflow);
    })
    await writeToCsv(arr, destinationFilePath)
    var orderDetails = {
        orders: ordersArr,
        shipments: shipmentsArr,
        workflows: workflowArr
    }
    return orderDetails;
};

// This function reads data from csv and returns array of objects
readCsv = (file) => {
    var output;
    pp.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
            //console.log(results);
            output = results;
        }
    });
    const arr = output.data;
    logger.info('----- csv parsed -----');
    return arr;
};

//This function returns updated 'array of objects' after manipulation that are further used to write csv
// Works for order create and order update
updateOrders = async (file, clientUuid, createOrUpdate, dataObj, orderIndex) => {
    this.file = file;
    if (createOrUpdate === 'create') {
        var arr = await readCsv(file);
        this.clientUuid = clientUuid;
        let orderDate = await getDate();
        let number = Math.floor(Date.now() / 1000);
        arr.map((obj, i) => {
            logger.info('Order Number ' + obj.order_number +
                ' replaced with ' + 'OD' + (number + i));
            obj.order_number = 'OD' + (number + i);
            obj.shipment_number = JSON.stringify((number + i));
            obj.orderline_number = ((number + i) + '_1');
            obj.order_date = orderDate;
            obj.orderline_clientId = clientUuid;
        })
        return arr;
    } else {
        if (orderIndex) {
            var arr = await readCsv(file);
            let orderObj = arr[orderIndex];
            this.dataObj = dataObj;
            logger.info('--- Updating order at index ' + orderIndex + ' ---')
            for (let datakey in dataObj) {
                for (let orderkey in orderObj) {
                    if (orderkey === datakey) {
                        logger.info(orderkey + ' : ' + orderObj[orderkey] +
                            ' replaced with --> ' + datakey + ' : ' + dataObj[datakey]);
                        orderObj[orderkey] = dataObj[datakey];
                    }
                }
            }
            arr[orderIndex] = orderObj;
            logger.info('--- Order at index ' + orderIndex + ' successfully updated ---')
            return arr;
        } else {
            logger.error("<*** Order index not provided for updation ***>")
        }
    }
};

// This function writes data(array of objects) in csv file
writeToCsv = async (data, destinationFilePath) => {
    var csvdata = await pp.unparse(data)
    logger.info('----- csv updated -----')
    fs.writeFileSync(destinationFilePath, csvdata)
};

//This function returns date in required format
getDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    orderDate = yyyy + '/' + mm + '/' + dd;
    return orderDate;
};

//Sample dataObj for updateOrders()
// var dataObj = {
//     order_number: '123',
//     order_type: 'TO',
//     order_date: '2020/01/11',
//     shipment_fc: 'AUTOFC2',
// };

// updateOrderCsvFile(file, '8cae343b88d4490f9ef6ae6b2031f8d7', dfilepath, 'create');
// updateOrderCsvFile(updateFile, '8cae343b88d4490f9ef6ae6b2031f8d7', dfilepath, 'update', dataObj, 1);

