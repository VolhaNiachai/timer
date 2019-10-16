import { StopwatchTimer } from "./stopwatchTimer.js";

function onIntervalTick() {
  const differenceMilliseconds = new Date().getTime() - this.startTime;

  this.differenceSeconds =
    this.lastDifferenceSeconds - Math.round(differenceMilliseconds / 1000);
  if (this.differenceSeconds === 0) {
    clearInterval(this.myInterval);
    console.log("stopped");
  }

  let seconds = parseInt(this.differenceSeconds % 60);
  let minutes = parseInt((this.differenceSeconds / 60) % 60);
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  this.htmlElements.output.innerText = `00:${minutes}:${seconds}`;
}

function Timer(initSeconds) {
  StopwatchTimer.call(this, "timer", initSeconds);
}
Timer.prototype = Object.create(StopwatchTimer.prototype);
Timer.prototype.costructor = Timer;
Timer.prototype.onIntervalTick = onIntervalTick;

export { Timer };
