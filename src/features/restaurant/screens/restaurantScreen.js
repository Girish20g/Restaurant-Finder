import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
import RestaurantInfoCard from "../components/restaurantInfoCard";
import SafeArea from "../../../components/utility/safeArea";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import Search from "../components/restaurantSearch";
import FavouriteBar from "../../../components/favourites/favouritesBar";
import { RestaurantList } from "../components/restaurantsListStyle";
import FadeInView from "../../../components/animations/fadeAnimations";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

function RestaurantScreen({ navigation }) {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const [isFavoriteToggled, setIsFavouriteToggled] = useState(false);

  const { favourites } = useContext(FavouritesContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouriteToggled={isFavoriteToggled}
        onFavouriteToggle={() => setIsFavouriteToggled(!isFavoriteToggled)}
      />
      {isFavoriteToggled && (
        <FavouriteBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <FadeInView>
                <RestaurantInfoCard restaurant={item} />
              </FadeInView>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}

export default RestaurantScreen;
