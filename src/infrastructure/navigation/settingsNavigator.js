import React from "react";
import SettingsScreen from "../../features/settings/screens/settingsScreen";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import FavouritesScreen from "../../features/settings/screens/favouritesScreen";

const SettingsStack = createStackNavigator();

const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerMode: "screen",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Accounts"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
