import React from 'react';
import { View } from 'react-native';

const Line = ({ width, height, color }) => {
  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: color,
      }}
    />
  );
};

export default Line;
