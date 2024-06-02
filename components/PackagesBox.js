import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../screen3styles';

const packages = [
  { id: '1', number: '01', title: 'Individual Package', price: 'Rs. 30,000.00' },
  { id: '2', number: '02', title: 'VIP Package - Pick up & drop off', price: 'Rs. 45,000.00' },
  { id: '3', number: '03', title: 'Family Package', price: 'Rs. 55,000.00' },
  { id: '4', number: '04', title: 'Weekend Package', price: 'Rs. 35,000.00' },
  // Add more packages as needed
];

const Packages = () => {
  return (
    <View>
      <View style={[styles.tabsContainer, styles.row]}>
        <View style={styles.row}>
          <FontAwesome5 name="tag" size={25} color="purple" />
          <Text style={[styles.tabText, { marginLeft: 5 }]}>Our Packages</Text>
        </View>
        <TouchableOpacity style={{ marginLeft: 'auto' }}>
          <Text style={[styles.tabText1, { color: 'purple' }]}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={packages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LinearGradient
            colors={['#a4508b', '#5f0a87']}
            style={styles.packageContainer}
          >
            <Text style={styles.packageNumber}>{item.number}</Text>
            <Text style={styles.packageTitle}>{item.title}</Text>
            <Text style={styles.packagePrice}>{item.price}</Text>
          </LinearGradient>
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.packagesRow}
      />
    </View>
  );
};

export default Packages;
