import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const YourRidesScreen = ({ navigation }) => {
  const ridesData = [
    { id: '1', vehicle: 'Car', date: '2023-08-30', fare: '₹500' },
    { id: '2', vehicle: 'Bike', date: '2023-08-28', fare: '₹533' },
    
  ];

  const renderRideItem = ({ item }) => (
    <TouchableOpacity style={styles.rideItem}>
      <Text style={styles.vehicle}>{item.vehicle}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.fare}>{item.fare}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      
      <FlatList
        data={ridesData}
        keyExtractor={(item) => item.id}
        renderItem={renderRideItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  rideItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vehicle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: 'gray',
  },
  fare: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default YourRidesScreen;
