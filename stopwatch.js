import { StopwatchTimer } from "./stopwatchTimer.js";

function onIntervalTick() {
  const differenceMilliseconds = new Date().getTime() - this.startTime;

  this.differenceSeconds =
    this.lastDifferenceSeconds + Math.round(differenceMilliseconds / 1000);

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

function Stopwatch(initSeconds) {
  StopwatchTimer.call(this, "stopwatch", initSeconds);
}

Stopwatch.prototype = Object.create(StopwatchTimer.prototype);
Stopwatch.prototype.constructor = Stopwatch;

Stopwatch.prototype.onIntervalTick = onIntervalTick;

export { Stopwatch };
