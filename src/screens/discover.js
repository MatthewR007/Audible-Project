import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';

export default function Discover() {
  // const [numBooks, setNumBooks] = useState('sdfasd');
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {

  //     fetch("http://openlibrary.org/search.json?q=harry+potter")
  //         .then(response => response.json())
  //         .then(data => (setNumBooks(data)));
  // }
  // )
  // console.log(numBooks.numFound)

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.text}>This is the Discover!</Text>
          {/* <Text>{numBooks.numFound}</Text> */}
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
    color: '#FFFFFF'
  }
});