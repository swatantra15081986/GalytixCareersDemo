const fetch = require('node-fetch');
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'info';

var restUtil = {
    getData: async (url, headers) => {
        this.url = url;
        this.headers = headers;
        const res = await fetch(this.url, {
            method: 'GET',
            headers: headers,
        }).catch(err => console.error(err));
        const jsonResp = await res.json();
        return jsonResp;
    },

    postData: async (url, headers, body) => {
        this.url = url;
        this.headers = headers;
        this.body = body;
        const res = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: headers,
        }).catch(err => console.error(err));
        const jsonResp = await res.json();
        return jsonResp;
    },

    setHeaders: (keys, values) => {
        header = {};
        keys.forEach((key, i) => header[key] = values[i]);
        console.log(header);
        return header;
    }

}
module.exports = restUtil;