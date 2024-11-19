import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.mainContainer}>
      {/* Container 1 */}
      <View style={styles.container}>
        <Text style={styles.text}>SCAN THIS QR CODE</Text>
        <Image 
          source={require('../assets/amidreaming.png')} 
          style={styles.image}
          />
        <Text style={styles.text}>SCAN IT NOW!!</Text>
        <Text style={styles.text2}>gedesatiya29@gmail.com</Text>
      </View>

      {/* Container 2 */}
      <View style={styles.smallContainer}>
        <Text style={styles.smallText}>WHATEVER :/</Text>
        <Image 
          source={require('../assets/barcode.jpg')} 
          style={styles.image2}
          />
        <Text style={styles.smallText2}>About</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2a52be',
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
  },
  text2: {
    fontSize: 15,
    color: '#ffffff'
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 10,
  },
  image2: {
    width: 100,
    height: 80,
    marginVertical: 5,
  },
  smallContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  smallText: {
    fontSize: 20,
    color: '#000000',
  },
  smallText2: {
    fontSize: 20,
    color: '#2a52be',
    textDecorationLine: 'underline',
  },
  
});