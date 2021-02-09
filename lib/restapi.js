var api = require('api-chain');
var request = require('request');
var winston = require('winston');

/**
 * @param {object} skiply any cf do
 */
module.exports = function(skiply){
    /**
     * @param {string} url any string providing urls
     * @param {string} cb any cb string
     */  
    skiply.get = function(url, cb) {
          request(skiply.url + url, {
                  'auth': skiply.auth
              },
              function(error, response, body) {
                  if (error) if(error)winston.error(error);
                  winston.info('GET API URL:' + skiply.url + url);
                  winston.info(response.statusCode);
                  if (cb) cb(error, body);
              });
      }
      /**
       * @param {string} url needs to be provided in string
       * @param {string} data needs to be provided
       * @param {string} cd needs to be be there 
      */
      skiply.post = function(url, data, cb) {
        var options = {
            uri: skiply.url + url,
            method: 'POST',
            json: data
        };
          request(options, {
                  'auth': skiply.auth
              },
              function(error, response, body) {
                  if (error) if(error) winston.error(error);
                  winston.info('POST API URL:' + skiply.url + url);
                  winston.info(body);
                  if (cb) cb(error, body);
              });
      }
}
