import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from '../src/screens/HomeScreen'

const BottomNavbar = ({ navigationState, setNavigationState }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab} onPress={() => setNavigationState('Home')}>
        <FontAwesome name="home" size={24} color={navigationState === 'Home' ? 'blue' : 'gray'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => setNavigationState('Search')}>
        <FontAwesome name="search" size={24} color={navigationState === 'Search' ? 'blue' : 'gray'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => setNavigationState('Notifications')}>
        <FontAwesome name="bell" size={24} color={navigationState === 'Notifications' ? 'blue' : 'gray'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => setNavigationState('Settings')}>
        <FontAwesome name="cog" size={24} color={navigationState === 'Settings' ? 'blue' : 'gray'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => setNavigationState('Profile')}>
        <FontAwesome name="user" size={24} color={navigationState === 'Profile' ? 'blue' : 'gray'} />  
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex : 1,
    //height: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingTop : 60,
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    //flex: 1,
  },
});

export default BottomNavbar;
