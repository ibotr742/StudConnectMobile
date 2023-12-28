// HomeScreen.js
import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Page d'acceuil</Text>
      <Image source={require("../Images/raccoon.png")} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 400,
    height: 400,
  },
});

export default HomeScreen;
