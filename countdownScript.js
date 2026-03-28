function countdown(seconds) {
  let sec = seconds
  setInterval(() => {
    if (sec > 0) {
    broadcast(sec, "#505050");
    sec -= 1
  }}, 1000)
}
