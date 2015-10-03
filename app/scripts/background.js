// jshint ignore: start


var started = false;

chrome.browserAction.onClicked.addListener(function (tab) {

  started = Utils.changeState(started);

  var tabId = tab.id;
  if (started) {
    ChromeHelper.capturePage(tabId, function (blob) {
      ChromeHelper.createTabFromBlob(blob);
    });
  }
});
// jshint ignore: end

