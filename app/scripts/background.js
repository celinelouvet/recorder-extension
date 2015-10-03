'use strict';

function createNotification(id, icon, message) {
  var options = {
    type: 'basic',
    iconUrl: icon,
    title: 'Activity Recorder',
    message: message
  };

  chrome.notifications.create(id, options, function () {
    console.error(chrome.runtime.error);
  });
}

function clearNotification(id) {
  chrome.notifications.clear(id, function () {
    console.error(chrome.runtime.error);
  });
}

function notify(icon, message) {
  var notificationId = Date.now().toString();
  createNotification(notificationId, icon, message);

  setTimeout(function () {
    clearNotification(notificationId);
  }, 1000);
}

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


function startRecording() {
  notify('images/recording-200.png', 'Recording started !');
  setIcon('images/recording.png');
}


function stopRecording() {
  notify('images/not-recording-200.png', 'Recording stopped !');
  setIcon('images/not-recording.png');
}

var started = false;
function changeState() {

  console.log('Started : ' + started);

  if (!started) {
    startRecording();
    setBadgeText('ON');
  } else {
    stopRecording();
    setBadgeText('');
  }
  started = !started;
}


chrome.browserAction.onClicked.addListener(function () {
  changeState();

});


