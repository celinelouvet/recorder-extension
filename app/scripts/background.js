// jshint ignore: start


var started = false;

chrome.browserAction.onClicked.addListener(function () {
  started = Utils.changeState(started);
});
// jshint ignore: end

