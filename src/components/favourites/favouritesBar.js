import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import CompactRestaurantInfo from "../restaurant/compactRestaurantInfo";
import Spacer from "../spacer";
import Text from "../typography";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const FavouritesBar = ({ favourites, onNavigate }) => {
  return (
    <FavouritesWrapper>
      <Spacer position={"left"} size="large">
        <Text>Favourites</Text>
      </Spacer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant, index) => {
          return (
            <Spacer key={index} position={"left"} size="large">
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetail", { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

export default FavouritesBar;
