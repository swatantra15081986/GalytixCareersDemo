#!/bin/bash
#echo "Starting webdriver manager in background to start the client server"
#nohup webdriver-manager start &
#echo $!
#sleep 10
echo "Creating backup before making changes to older Order file"
echo "######################################"
cp scripts/WMS/$1/OrderFileUpload_Backup.csv data/WMS/$1/OrderFileUpload.csv
echo "Copied Orderfile.csv from backed up file to start getting picked up in the next step."
echo "######################################"
echo "Updating OrderFileUpload.csv with the random number data as Order Number"
./changeTheData.sh $1
echo "Replacing the content completes in OrderFileUpload.csv"
echo "######################################"
echo "All the required changes been completed now please start with the Flow Executions like INBOUND/OUTBOUND."
echo "######################################"
echo "Going to run recall flow result will be added to the same report for this as well."
ENV=$1 protractor conf.js --suite $2
echo "######################################"
echo "ALL OF THE FLOW EXECUTION COMPLETED FOR "$1" ENVIRONMENT."

