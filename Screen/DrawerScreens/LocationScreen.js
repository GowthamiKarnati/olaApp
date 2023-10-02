import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MapView, {Marker} from 'react-native-maps'; 
import { useRoute } from '@react-navigation/native';
import { setSelectedTitle } from '../../redux/reducers/itemSlice'; 
import DotLineWithLabels from '../Components/DotLineWithLabels';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
const LocationScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [selectItem, setSelectedItem] = useState(null);
  const handlePress = () => {
    
      navigation.navigate('PaymentScreen', { Amount: selectItem });
  
  };
  const PickedItem = useSelector((state) => state.item.selectedItem);
  const PickedTitle = useSelector((state) => state.item.selectedTitle);
  const data = [
    {
      id: '1',
      title: 'Car',
      icon: 'car', 
      price: '₹500',
    },
    {
      id: '2',
      title: 'Bike',
      icon: 'motorcycle', 
      price: '₹533',
    },
    
    {
      id: '3',
      title: 'Prime Sedan',
      icon: 'car',
      price: '₹820', 
    },
    {
      id: '4',
      title: 'Prime SUV',
      icon: 'car', 
      price: '₹549',
    },
    {
      id: '5',
      title: 'Mini',
      icon: 'car', 
      price: '₹570',
    },
  ];
  const [selectedMode, setSelectedMode] = useState('');
  

  const selectRideMode = (id,price,title) => {
    console.log(id, 'selected one');
    setSelectedMode(id);
    setSelectedItem(price);
    dispatch(setSelectedTitle(title));
  };
  const renderMode = ({ item }) => (
    <TouchableOpacity style={styles.item(selectedMode===item.id)} onPress={() => selectRideMode(item.id, item.price, item.title)}>
      <Icon name={item.icon} size={30} color="green" />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
  
  const route = useRoute();
  const selectedItem = route.params?.selectedItem || 'Location';
  
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <MapView
          style={{width:'100%', height:'100%'}}
          initialRegion={{
            latitude: 27.149444791196416, 
            longitude: 77.56500178699532,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >
          <Marker
              coordinate={{
                latitude: 27.149444791196416, 
                longitude: 77.56500178699532,
              }}
            title="your destination" 
            description="Destination" 
          />
        </MapView>
      </View>
      <View style={styles.bottomView}>
        {/* //<Text style={{ color: 'white', position: 'absolute', top: 0, left: 0, textAlign: 'center', width: '100%' }}>{selectedItem}</Text> */}
      <View style={styles.dotline}>
      {PickedItem ? (
        <DotLineWithLabels fromLabel={PickedItem} toLabel={selectedItem} />
        ) : (
        <DotLineWithLabels fromLabel="Your Location" toLabel={selectedItem} />
        )}
        </View> 
        <View style={styles.separator} />
        <View>
          <Text style={{color:'white', fontWeight:'bold', marginLeft:5, marginTop:0,  fontSize: 22,}}>Recommended for you</Text>
          <Text style={{color:'orange', fontWeight:'bold', marginLeft:5, marginTop:10,  fontSize: 16,}}>Choose the right traveller for your journey ..</Text>
        </View>
      </View> 
      <View style={styles.flatlist}>
          <FlatList
              data={data}
              renderItem={renderMode}
              keyExtractor={(item) => item.id}
          />
      </View>
      <View>

        <TouchableOpacity onPress={handlePress} style={styles.button(selectedMode === '')} disabled={selectedMode === ''}>
          <Text style={styles.buttonText}>Book {PickedTitle}</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default LocationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  topView: {
    flex: 1, 
     
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  bottomView: {
    flex: 2, 
    flexDirection:'column',
    backgroundColor: 'black', 
  },
  dotline: {
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    padding: 20,
    marginBottom:10, 
  },
  separator: {
    borderBottomWidth: 1, 
    borderColor: 'white', 
    marginBottom: 20, 
    width: "100%",
  },
  flatlist:{
    backgroundColor:'black',
    
    padding:30

  },
  item: isSelected => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: isSelected ? '#D7DF23' : 'transparent',
    paddingHorizontal:10,borderRadius:10,

  }),
  itemDetails: {
    flexDirection: 'column',
    alignItems: 'flex-end', 
  },
  itemTitle: {
    fontSize: 20,
    color:'white',
  },
  itemPrice: {
    fontSize: 16,
    color: 'green', 
  },
  button: isDisabled => ({
    backgroundColor: isDisabled ? 'gray': 'white', 
    padding: 10,
    borderRadius: 0,
  }),
  buttonText: {
    color: 'black', 
    fontSize: 20,
    textAlign: 'center',
  },
  
  
  
});