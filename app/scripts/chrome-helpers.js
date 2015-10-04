'use strict';

var ChromeHelper = (function () {

  var console = chrome.extension.getBackgroundPage().console;

  function setIcon(url) {
    var icon = {
      path: url
    };
    chrome.browserAction.setIcon(icon, function () {
    });
  }

  function setBadgeText(text) {
    chrome.browserAction.setBadgeText({text: text});
  }

  function createNotification(id, icon, message) {
    var options = {
      type: 'basic',
      iconUrl: icon,
      title: 'Activity Recorder',
      message: message
    };

    chrome.notifications.create(id, options, function () {
      console.error(chrome.runtime.lastError.message);
    });
  }

  function clearNotification(id) {
    chrome.notifications.clear(id, function () {
      console.error(chrome.runtime.lastError.message);
    });
  }

  function capturePage(tabId, callback) {
    chrome.pageCapture.saveAsMHTML({tabId: tabId}, callback);
  }

  function createTabFromBlob(blob) {
    var url = URL.createObjectURL(blob);
    var options = {
      url: url,
      active: false
    };
    chrome.tabs.create(options, function () {
    });
  }

  return {
    console: console,
    setBadgeText: setBadgeText,
    setIcon: setIcon,
    createNotification: createNotification,
    clearNotification: clearNotification,
    capturePage: capturePage,
    createTabFromBlob: createTabFromBlob
  };
})();
