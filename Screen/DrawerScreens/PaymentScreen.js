import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const PaymentScreen = ({ navigation }) => {
    const route = useRoute();
    const {Amount} = route.params || '0 ';

  
  const handlePayment = (paymentOption) => {
    
    alert(`Payment successful with ${paymentOption}!`);
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Details</Text>

      
      <Text style={styles.amount}>Amount: {Amount}</Text>

      
      <TouchableOpacity
        style={styles.paymentOption}
        onPress={() => handlePayment('PhonePe')}
      >
        <Text style={styles.paymentOptionText}>Pay with PhonePe</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.paymentOption}
        onPress={() => handlePayment('Google Pay')}
      >
        <Text style={styles.paymentOptionText}>Pay with Google Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paymentOption: {
    backgroundColor: '#D7DF23',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  paymentOptionText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default PaymentScreen;
