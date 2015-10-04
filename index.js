'use strict';

var action = require('./mailer.js');

exports.handler = function(event, context) {
  action.run(event, context, function(error, result) {
    return context.done(error, result);
  });
};
