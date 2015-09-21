var postSlack = require("./lib/notify_slack.js");
var inCircleci = require("./lib/in_circleci.js");

exports.handler = function(event, context) {
  body = inCircleci(event.payload || {});
  postSlack({text: body}, function(){
    context.done(null, {message:'Hello from AWS Lambda!'}); 
  });
};

