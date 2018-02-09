import { AppRegistry, Platform } from 'react-native';
import App from './App';
import store from "./store/store.js";

// if no foreground service, this only runs when app has the focus
setInterval(function() {
  console.log('*** index.js setInterval', new Date(), ', Platform:', Platform.OS, '/', Platform.Version);
    store.dispatch({ type: 'TIMESTAMP' });
  }, 10000);

AppRegistry.registerComponent('ForegroundTest', () => App);
