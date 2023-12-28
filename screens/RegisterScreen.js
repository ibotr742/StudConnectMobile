import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import firebase, { FIREBASE_AUTH } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation(); // Obtenez l'objet de navigation

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("check your email");
    } catch (error) {
      console.log(error);
      alert("sign in beug" + error.message);
    } finally {
      setLoading(false);
      navigation.navigate("Home");
    }
  };

  return (
    <View>
      <TextInput
        placeholder="E-mail"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Mot de passe"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="S'inscrire" onPress={signUp} />
    </View>
  );
};

export default LoginScreen;
