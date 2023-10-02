// ElectricScreen.js

import React from 'react';
import { View, Text, Button, Image, StyleSheet,TouchableOpacity } from 'react-native';

const ElectricScreen = () => {
  // Define a function to handle charging
  const handleCharge = () => {
    // Implement your charging functionality here
    // This function can trigger actions to start charging an electric vehicle
  };

  return (
    <View style={styles.container}>
      

      <Image
        source={require('../../Image/electric.webp')}
        
        style={styles.image}
      />
      <Text style={styles.title}>Electric Vehicles</Text>
      <Text style={styles.description}>
        Charge your electric vehicle at our stations.
      </Text>
      
      <View style={styles.features}>
        <Text style={styles.featureItem}>Fast Charging Available</Text>
        <Text style={styles.featureItem}>Multiple Charging Ports</Text>
        <Text style={styles.featureItem}>24/7 Access</Text>
      </View>
      <View style={{flex:1, flexDirection:'column'}}>
      <Text style={styles.price}>Price: ₹1,41,499</Text>
      <TouchableOpacity
        style={styles.buyButton}
        onPress={() => {
          // Handle the "Buy" button press here
          // You can navigate to a purchase screen or perform any other action.
        }}
      >
        <Text style={styles.buyButtonText}>Buy</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop:20,
    paddingHorizontal: 0,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  features: {
    marginTop: 20,
  },
  featureItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  buyButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ElectricScreen;
