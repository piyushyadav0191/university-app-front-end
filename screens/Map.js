import React from "react";
import { Image, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
// import barkatullah from "../assets/barkatullah.jpg";

const barkatullah = require("../assets/barkatullah.jpg");

export default function Map() {
  const initialRegion = {
    latitude: 23.20035543010964,
    longitude: 77.4514460503998,
    latitudeDelta: 0.045,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Marker
          coordinate={{
            latitude: 23.20035543010964,
            longitude: 77.4514460503998,
          }}
          title="Barkatullah University"
          description="This is our Barkatullah University"
        >
          <Image source={barkatullah} style={styles.markerImage} />
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  markerImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
