import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { selectUser } from '../../redux/reducers/userScile';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Menu = () => {
    const navigation = useNavigation();
  const userData = useSelector(selectUser);
  console.log(userData)
  const dispatch = useDispatch();

  const handleLogout = () => {
    
    navigation.navigate('Auth');
  };
  return (
    <View style={styles.container}>
      {userData ? (
        <View style={styles.profileContainer}>
        <Icon name="user" size={50} color="black" style={styles.profileIcon} />
          <Text style={styles.welcomeText}>Welcome, {userData.userName}!</Text>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>Email: {userData.userEmail}</Text>
            <Text style={styles.userInfoText}>Age: {userData.userAge}</Text>
            <Text style={styles.userInfoText}>Address: {userData.userAddress}</Text>
          </View>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      ) : (
        <Text style={styles.registerText}>Please Register to view your profile.</Text>
      )}
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    
      
    profileContainer: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 0, // Add a subtle shadow
      },
      welcomeText: {
        fontSize: 20,
        color: 'black',
        marginBottom: 10,
      },
      userInfo: {
        marginBottom: 10,
      },
      userInfoText: {
        color: 'black',
        fontSize: 16,
        marginBottom: 5,
      },
      registerText: {
        fontSize: 18,
        color: 'black',
      },
})