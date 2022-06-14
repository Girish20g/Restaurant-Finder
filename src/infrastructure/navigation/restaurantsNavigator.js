import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantScreen from "../../features/restaurant/screens/restaurantScreen";
import RestaurantDetailScreen from "../../features/restaurant/screens/restaurantDetailScreen";

const RestaurantsStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      initialRouteName="Restaurants"
      screenOptions={{
        headerMode: "none",
        ...TransitionPresets.BottomSheetAndroid,
      }}
    >
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantsStack.Navigator>
  );
};

export default RestaurantsNavigator;
