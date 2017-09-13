
/*jshint esversion: 6 */
// Import  library to help create a Component
// es6 code below
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => (
  <View>
    <Header headerText={ 'Albums' }/>
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
