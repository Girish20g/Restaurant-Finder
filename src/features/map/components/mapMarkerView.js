import React from "react";
import CompactRestaurantInfo from "../../../components/restaurant/compactRestaurantInfo";

const MapMarkerView = ({ restaurant }) => {
  return <CompactRestaurantInfo isMap restaurant={restaurant} />;
};

export default MapMarkerView;
