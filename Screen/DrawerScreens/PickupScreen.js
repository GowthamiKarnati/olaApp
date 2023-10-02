import { StyleSheet, Text, View,TextInput, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { setSelectedItem } from '../../redux/reducers/itemSlice';
const PickupScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const mockSuggestions = ['Charminar', 'Golconda Fort', 'Salar Jung Museum','Laad Bazaar','Birla Mandir'];
  return (
    
    <View>
      <FlatList
        data={mockSuggestions}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            dispatch(setSelectedItem(item)); 
            navigation.navigate('HomeScreen'); // Navigate to HomeScreen
          }}>
            <View style={styles.suggestionItem}>
              <Text style={styles.suggestionText}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.suggestionsList}
      />

    </View>
  )
}

export default PickupScreen

const styles = StyleSheet.create({
  suggestionItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  suggestionText: {
    fontSize: 16,
  },
  suggestionsList: {
    marginTop: 10,
  },
})