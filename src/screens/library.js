import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Library() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Animatable.Text
          animation='bounceInRight'
          iterationCount={'infinite'}
        >
          <Text style={styles.text}>This is the Library!</Text>
        </Animatable.Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    backgroundColor: '#718F90',
    padding: 50,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
  text: {
    color: '#FFFFFF',
  }
});