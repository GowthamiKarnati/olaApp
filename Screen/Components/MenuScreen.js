// MenuScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';

const MenuScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Menu Screen</Text>
      {/* Add your menu content here */}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default MenuScreen;
