let postSlack = require("./notify_slack.js");
let inCircleci = require("./in_circleci.js");

export default function(event, context) {
  console.log(event)
  let body = inCircleci(event.payload || {});
  postSlack({text: body}, function(){
    context.done(null, {message:'Hello from AWS Lambda!'}); 
  });
};


