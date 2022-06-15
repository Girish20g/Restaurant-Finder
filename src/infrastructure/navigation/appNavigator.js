import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import RestaurantsNavigator from "./restaurantsNavigator";
import MapScreen from "../../features/map/screens/mapScreen";
import RestaurantsContextProvider from "../../services/restaurants/restaurants.context";
import LocationContextProvider from "../../services/location/location.context";
import FavouritesContextProvider from "../../services/favourites/favourites.context";
import SettingsNavigator from "./settingsNavigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurant: "md-restaurant",
  Map: "md-globe",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerShown: false,
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

function AppNavigator(props) {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurant" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
}

export default AppNavigator;
