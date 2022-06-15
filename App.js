import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useLobster,
  Lobster_400Regular,
} from "@expo-google-fonts/lobster";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { theme } from "./src/infrastructure/theme";
import Navigation from "./src/infrastructure/navigation";
import AuthenticationContextProvider from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyDpyGIWOc1pcZLOkO614gYO_k3c7SBXVdo",
  authDomain: "restaurantfinder-f7ae3.firebaseapp.com",
  projectId: "restaurantfinder-f7ae3",
  storageBucket: "restaurantfinder-f7ae3.appspot.com",
  messagingSenderId: "477306237119",
  appId: "1:477306237119:web:aa25a45bf7eb00eca2160a",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [lobsterLoaded] = useLobster({
    Lobster_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!lobsterLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
