import React from "react";
import {
  TouchableWithoutFeedback,
  View,
  Text,
  Button,
  StyleSheet,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { FIREBASE_AUTH } from "./firebase";

const Stack = createStackNavigator();

const connecter = false;

if (FIREBASE_AUTH.currentUser != null) {
  const connecter = true;
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: "Stud'Connect",
          headerStyle: { backgroundColor: "#004", height: 140 },
          headerTintColor: "#3498db",
          headerTitleStyle: { fontWeight: "bold" },
          headerBackTitle: "",
          headerRight: () => (
            <View>
              {FIREBASE_AUTH.currentUser == null ? ( //Si l'utilisateur n'est pas connecté
                <Text>
                  <HeaderRightComponent
                    label="Connexion"
                    destination="Login"
                    couleur="blue"
                  />

                  <HeaderRightComponent
                    label="Inscription"
                    destination="Register"
                    couleur="grey"
                  />
                </Text>
              ) : (
                // sinon
                <Text>
                  <HeaderRightComponent
                    label="Deconnexion"
                    destination="Home"
                    couleur="blue"
                  />
                  <HeaderRightComponent
                    label="Mon Profile"
                    destination="Profile"
                    couleur="grey"
                  />
                </Text>
              )}
            </View>
          ),
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HeaderRightComponent = ({ label, destination, couleur }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (label === "Deconnexion") {
      FIREBASE_AUTH.signOut();
    }
    navigation.navigate(destination);
  };

  const buttonStyle =
    couleur === "blue" ? styles.headerButtonBlue : styles.headerButtonGrey;
  const textStyle =
    couleur === "blue" ? styles.headerButtonText : styles.headerButtonTextWhite;

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={buttonStyle}>
        <Text style={textStyle}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  headerButtonBlue: {
    paddingVertical: 10,
    backgroundColor: "#3c6cc3",
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 20,
  },
  headerButtonGrey: {
    paddingVertical: 10,
    backgroundColor: "#233e6f",
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 20,
  },
  headerButtonText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
  },
  headerButtonTextWhite: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default App;
