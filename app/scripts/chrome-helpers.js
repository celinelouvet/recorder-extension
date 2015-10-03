'use strict';

var ChromeHelper = (function () {

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

  return {
    setBadgeText: setBadgeText,
    setIcon: setIcon,
    createNotification: createNotification,
    clearNotification: clearNotification
  };
})();
