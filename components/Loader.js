import { View, Text } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native";

const Loader = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator animating={true} size={100} color="#2898FF" />
    </View>
  );
};

export default Loader;
