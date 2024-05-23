import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import Packages from '../../components/Packages';
import DotNavigation from '../../components/DotNavigation';
import Options from '../../components/Options';
import styles from '../../screen3styles';

const DrivingSchoolApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blankSpace} />
      <Header />
      <Packages />
      <DotNavigation currentIndex={0} />
      <Options />
    </View>
  );
};

export default DrivingSchoolApp;
