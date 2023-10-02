import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = ({ quote }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{quote}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default Footer;
