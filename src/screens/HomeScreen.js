import React from "react";
import { Button, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <View>{<Button title="Go to Settings" onPress={goToSettings} />}</View>
  );
};

export default HomeScreen;
