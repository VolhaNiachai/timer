import { ClassHelper } from "./classHelper.js";

function StopwatchTimer(initMode, initSeconds) {
  this.startTime;
  this.myInterval;
  this.lastDifferenceSeconds = initSeconds;
  this.differenceSeconds = 0;
  this.mode = initMode;

  this.htmlElements = {
    output: document.querySelector(
      `.container [data-mode="${this.mode}"] .output`
    ),
    buttons: document.querySelectorAll(
      `.container .tabs [data-mode="${this.mode}"] .buttons button`
    ),
    startButton: document.querySelector(
      `.container .tabs [data-mode="${this.mode}"] .buttons .start`
    ),
    stopButton: document.querySelector(
      `.container .tabs [data-mode="${this.mode}"] .buttons .stop`
    ),
    resetButton: document.querySelector(
      `.container .tabs [data-mode="${this.mode}"] .buttons .reset`
    )
  };
  
  this.htmlElements.startButton.addEventListener(
    "click",
    this.onStartButtonClick.bind(this)
  );
  this.htmlElements.stopButton.addEventListener(
    "click",
    this.onStopButtonClick.bind(this)
  );
  this.htmlElements.resetButton.addEventListener(
    "click",
    this.onResetButtonClick.bind(this, initSeconds)
  );
}
StopwatchTimer.prototype.onStartButtonClick = function() {
  ClassHelper.removeClass("disabled", this.htmlElements.buttons);
  ClassHelper.addClass("disabled", [this.htmlElements.startButton]);
  this.myInterval = setInterval(this.onIntervalTick.bind(this), 1000);
  this.startTime = new Date().getTime();
};

StopwatchTimer.prototype.onResetButtonClick = function(initSeconds) {
  ClassHelper.removeClass("disabled", this.htmlElements.buttons);
  ClassHelper.addClass("disabled", [this.htmlElements.resetButton]);
  this.lastDifferenceSeconds = initSeconds;
  this.startTime = new Date().getTime();
  clearInterval(this.myInterval);
  this.onIntervalTick.call(this);
};
StopwatchTimer.prototype.onStopButtonClick = function() {
  ClassHelper.removeClass("disabled", this.htmlElements.buttons);
  ClassHelper.addClass("disabled", [this.htmlElements.stopButton]);
  clearInterval(this.myInterval);
  this.lastDifferenceSeconds = this.differenceSeconds;
};

export { StopwatchTimer };
