import request from "request"
import env from "./env.js"

export default function notifySlack (message, done) {
  const SLACK_ENDPOINT = env.SLACK_ENDPOINT

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
