var api = require('api-chain');
var request = require('request');
var winston = require('winston');
/**
 * @param {string} skiply the skiply oject present here
*/
module.exports = function(skiply){
    /**
     * 
     * @param {string} url string that is provided here 
     * @param {string} cb sting cb is provied 
     */
      skiply.get = function(url, cb) {
          request(skiply.url + url, {
                  'auth': skiply.auth
              },
              /**
               * 
               * @param {object} error the error object
               * @param {*} response the response object when successful
               * @param {*} body the body of the response
               */
              function(error, response, body) {
                  if (error) if(error)winston.error(error);
                  winston.info('GET API URL:' + skiply.url + url);
                  winston.info(response.statusCode);
                  if (cb) cb(error, body);
              });
      }
      /**
       * 
       * @param { string } url string provided 
       * @param {*} data data provided here
       * @param {*} cb cb provided in place
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
              /**
               * 
               * @param {*} error error object if any
               * @param {*} response response object if any
               * @param {*} body response body if any
               */
              function(error, response, body) {
                  if (error) if(error) winston.error(error);
                  winston.info('POST API URL:' + skiply.url + url);
                  winston.info(body);
                  if (cb) cb(error, body);
              });
      }
}
