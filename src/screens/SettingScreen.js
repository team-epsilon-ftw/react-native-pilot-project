import React from "react";
import { Button, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SettingScreen = () => {
  const navigation = useNavigation();

  const goToHomeScreen = () => {
    navigation.navigate("Home");
  };

  return (
    <View>{<Button title="Go to HomeScreen" onPress={goToHomeScreen} />}</View>
  );
};

export default SettingScreen;
