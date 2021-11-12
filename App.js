import React from 'react';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

export default class App extends React.Component {
  render() {
    return (
      <WebView
          style={{flex: 1}}
          originWhitelist={['*']}
          source={{
            uri: 'file:///android_asset/html/index.html'
          }}
          style={{marginTop: 20}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  webSize: {
    width: '100%',
    height: '100%',
  },
});