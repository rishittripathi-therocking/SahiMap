import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main  from './component/MainComponent';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings['Remote Debugger'];
export default class App extends React.Component{
  render() {
    return(
      <Main />
    );
  }
}
