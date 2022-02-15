import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TransactionScreen from './screens/BookTransactionScreen';

export default class App extends React.Component {
  render(){
    return (
      
        <BookTransactionScreen/>
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  QrCodeScanner: {screen: TransactionScreen},
});

const BookTransactionScreen  =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
