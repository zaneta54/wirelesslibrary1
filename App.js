import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  createAppContainer  } from 'react-navigation-tabs';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import BookTransactions from './screens/BookTransactions.js';
import SearchScreen from './screens/SearchScreen.js';
export default class  App extends React.Component {
  render(){
  return (
    <Appcontainer />
  );
  }}
const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:BookTransactions},
  Search:{screen:SearchScreen}
})


const Appcontainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
