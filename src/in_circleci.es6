export default function inCircleci(payload) {
  console.log(payload);
  return `Build ${payload.outcome} / ${payload.lifecycle}: (Built in ${payload.build_time_millis}ms)`
}
