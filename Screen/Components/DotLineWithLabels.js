import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DotWithLabel = ({ label }) => {
  return (
    <View style={styles.container}>
      <View style={styles.dot} />
      <Text style={styles.label}>{label}</Text>
      
    </View>
  );
};

const DotLineWithLabels = ({ fromLabel, toLabel }) => {
  return (
    <View style={styles.container}>
      <DotWithLabel label={fromLabel} />
      <View style={styles.line} />
      <DotWithLabel label={toLabel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Vertical layout
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green', // Dot color
  },
  label: {
    marginTop: 5, // Adjust the margin as needed
    color: 'white',
    fontSize: 12,
  },
  line: {
    width: 2, // Line thickness
    height: 60, // Line length
    backgroundColor: 'white', // Line color
  },
});

export default DotLineWithLabels;
