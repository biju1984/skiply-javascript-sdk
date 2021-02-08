var api = require('api-chain');
var request = require('request');
var winston = require('winston');

//hello world

module.exports = function(url, username, password, account, parallel, log_level) {
    winston.level = log_level || 'error';
    var skiply = this;
    skiply.url = url;
    if (skiply.url.lastIndexOf('http') < 0) skiply.url = 'http://' + skiply.url;
    skiply.host = skiply.url.replace('https://', '').replace('http://', '');
    skiply.username = username;
    skiply.password = password;
    skiply.account = account || 'customer1';
    skiply.auth = {
        'user': skiply.username + '@' + skiply.account,
        'pass': skiply.password,
        'sendImmediately': true
    }



    // Load Libs
    require('./lib/cart.js')(skiply);
    require('./lib/cards.js')(skiply);
    require('./lib/payment.js')(skiply);
    require('./lib/product.js')(skiply);
    require('./lib/school.js')(skiply);
    require('./lib/session.js')(skiply);
    require('./lib/user.js')(skiply);


    return skiply;
}
