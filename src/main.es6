let postSlack = require("./notify_slack.js");
let inCircleci = require("./in_circleci.js");

export default function(event, context) {
  let body = inCircleci(event.payload || {});
  postSlack({text: body}, function(){
    context.done(null, {message:'Hello from AWS Lambda!'}); 
  });
};


