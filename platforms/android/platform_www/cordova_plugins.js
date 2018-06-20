cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.hutchind.cordova.plugins.streamingmedia.StreamingMedia",
    "file": "plugins/com.hutchind.cordova.plugins.streamingmedia/www/StreamingMedia.js",
    "pluginId": "com.hutchind.cordova.plugins.streamingmedia",
    "clobbers": [
      "streamingMedia"
    ]
  },
  {
    "id": "ionic-plugin-keyboard.keyboard",
    "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
    "pluginId": "ionic-plugin-keyboard",
    "clobbers": [
      "cordova.plugins.Keyboard"
    ],
    "runs": true
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-network-information.network",
    "file": "plugins/cordova-plugin-network-information/www/network.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "navigator.connection",
      "navigator.network.connection"
    ]
  },
  {
    "id": "cordova-plugin-network-information.Connection",
    "file": "plugins/cordova-plugin-network-information/www/Connection.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "Connection"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "com.hutchind.cordova.plugins.streamingmedia": "0.1.4",
  "ionic-plugin-keyboard": "2.2.1",
  "cordova-plugin-whitelist": "1.3.1",
  "cordova-plugin-device": "1.1.4",
  "cordova-plugin-splashscreen": "4.0.3",
  "cordova-plugin-ionic-webview": "1.1.16",
  "cordova-plugin-network-information": "1.3.4"
};
// BOTTOM OF METADATA
});