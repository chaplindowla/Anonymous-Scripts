function countdown(seconds) {
  let sec = seconds
  setInterval(() => {
    if (sec-- > 0) {
    broadcast(sec, "#505050");
  }}, 1000)
}
