'use strict';

var Utils = (function () {

  function notify(icon, message) {
    ChromeHelper.console.log('Notify : ' + message);

    var notificationId = Date.now().toString();
    ChromeHelper.createNotification(notificationId, icon, message);

    setTimeout(function () {
      ChromeHelper.clearNotification(notificationId);
    }, 1000);
  }


  function startRecording() {
    ChromeHelper.console.log('Start recording');

    notify('images/recording-200.png', 'Recording started !');
    ChromeHelper.setIcon('images/recording.png');
  }


  function stopRecording() {
    ChromeHelper.console.log('Stop recording');

    notify('images/not-recording-200.png', 'Recording stopped !');
    ChromeHelper.setIcon('images/not-recording.png');
  }


  function changeState(started) {
    ChromeHelper.console.log('Change State from ' + started + ' to ' + !started);

    if (!started) {
      startRecording();
      ChromeHelper.setBadgeText('ON');
    } else {
      stopRecording();
      ChromeHelper.setBadgeText('');
    }
    return !started;
  }

  return {
    notify: notify,
    startRecording: startRecording,
    stopRecording: stopRecording,
    changeState: changeState
  };
})();
