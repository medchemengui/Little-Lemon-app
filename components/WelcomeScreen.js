import {  Text, ScrollView, StyleSheet } from 'react-native'
import * as React from 'react';

export default function WelcomeScreen() {
  return (
    
    <ScrollView style={styles.container}>
    <Text
      style={styles.headerText}>
      Welcome to Little Lemon
    </Text>
    <Text
      style={styles.innerText}>
      Little Lemon is a charming neighborhood bistro that serves simple food
      and classic cocktails in a lively but casual environment. We would love
      to hear your experience with us!
    </Text>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  container :{
    flex: 1
  },
  headerText:{
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  innerText:{
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  }
})
