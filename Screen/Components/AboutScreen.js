// AboutOlaScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.description}>
        Ola is a ride-sharing platform that provides convenient and affordable transportation solutions. 
        
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default AboutScreen;
