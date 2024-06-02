import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import Packages from '../../components/PackagesBox';
import DotNavigation from '../../components/DotNavigation';
import Options from '../../components/OptionsBox';
import styles from '../styles/screen3styles';
import NavBar from '../../components/NavBar'

const DrivingSchoolApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blankSpace} />
      <Header />
      <Packages />
      <DotNavigation currentIndex={0} />
      <Options />
      <NavBar/>
    </View>
  );
};

export default DrivingSchoolApp;
