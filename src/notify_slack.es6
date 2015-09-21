var request = require("request");

export default function notifySlack (message, done) {
  const SLACK_ENDPOINT = "https://hooks.slack.com/services/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  request.post({
    url: SLACK_ENDPOINT,
    form: { payload: JSON.stringify(message) }
  }, function(err, res){
    if(err){
      console.log("Error:" + err);
    }
    done();
  })
}
