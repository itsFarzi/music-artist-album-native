import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

//Component
import ArtistsContainer from './src/component/ArtistsContainer'

export default class App extends Component{
  render() {
    return ( 
      <ArtistsContainer />
      ); 
  }
}
