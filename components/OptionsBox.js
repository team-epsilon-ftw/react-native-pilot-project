import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from '../src/styles/screen3styles';

const Options = () => {
  return (
    <View style={styles.optionsContainer}>
      <View style={styles.optionsRow}>
        <View style={styles.optionItem}>
          <View style={styles.optionBox}>
            <ImageBackground
              source={require('../assets/packageScreen/ONE.png')}
              style={styles.optionImage}
              imageStyle={{ borderRadius: 10 }}
            />
          </View>
          <Text style={styles.optionLabel}>About Us</Text>
        </View>
        <View style={styles.optionItem}>
          <View style={styles.optionBox}>
            <ImageBackground
              source={require('../assets/packageScreen/TWO.png')}
              style={styles.optionImage}
              imageStyle={{ borderRadius: 10 }}
            />
          </View>
          <Text style={styles.optionLabel}>Our Instructors</Text>
        </View>
        <View style={styles.optionItem}>
          <View style={styles.optionBox}>
            <ImageBackground
              source={require('../assets/packageScreen/THREE.png')}
              style={styles.optionImage}
              imageStyle={{ borderRadius: 10 }}
            />
          </View>
          <Text style={styles.optionLabel}>Contact Us</Text>
        </View>
      </View>
      <View style={styles.optionsRow}>
        <View style={styles.optionItem}>
          <View style={styles.optionBox}>
            <ImageBackground
              source={require('../assets/packageScreen/FOUR.png')}
              style={styles.optionImage}
              imageStyle={{ borderRadius: 10 }}
            />
          </View>
          <Text style={styles.optionLabel}>Reviews</Text>
        </View>
        <View style={styles.optionItem}>
          <View style={styles.optionBox}>
            <ImageBackground
              source={require('../assets/packageScreen/FIVE.png')}
              style={styles.optionImage}
              imageStyle={{ borderRadius: 10 }}
            />
          </View>
          <Text style={styles.optionLabel}>Gallery</Text>
        </View>
        <View style={styles.optionItem}>
          <View style={styles.optionBox}>
            <ImageBackground
              source={require('../assets/packageScreen/SIX.png')}
              style={styles.optionImage}
              imageStyle={{ borderRadius: 10 }}
            />
          </View>
          <Text style={styles.optionLabel}>Our Social Media</Text>
        </View>
      </View>
    </View>
  );
};

export default Options;
