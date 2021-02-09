var api = require('api-chain');
var request = require('request');
var winston = require('winston');

module.exports = function(skiply){
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
