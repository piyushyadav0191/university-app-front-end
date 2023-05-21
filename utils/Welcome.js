import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { Avatar } from "@rneui/themed";

const Welcome = ({ image }) => {
  const { user } = useSelector((state) => state.auth);
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Profile");
  };

  return (
    <View>
      <View style={styles.headContainer}>
        <Text style={styles.userName}>Welcome {user.name}!</Text>
        <TouchableOpacity
          onPress={handlePress}
          style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}
        >
          <View style={styles.profileContainer}>
            <Avatar size={55} source={{ uri: image }} rounded />
            {/* <Text style={styles.profile}>Profile</Text> */}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.location}>Location</Text>
        <AntDesign name="down" size={14} color="black" style={styles.icon} />
      </View>
      <TouchableOpacity
        style={styles.locationContainer}
        onPress={() => navigation.navigate("Map")}
      >
        <MaterialIcons
          name="my-location"
          size={24}
          color="#2898FF"
          style={styles.icon}
        />
        <Text style={styles.locationName}>Bhopal, Madhya Pradesh</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  userName: {
    color: "black",
    fontSize: 24,
    marginTop: 20,
    marginLeft: 10,
    fontWeight: "600",
  },
  profileContainer: {
    borderRadius: 5,
    marginTop: 18,
    marginRight: 20,
    paddingLeft: 3,
    paddingRight: 3,
  },
  profile: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    color: "gray",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "normal",
    fontStyle: "normal",
  },
  locationName: {
    color: "black",
    fontSize: 16,
    marginTop: 5,
    marginLeft: 10,
    fontWeight: "500",
    fontStyle: "normal",
  },
  icon: {
    marginLeft: 4,
    marginTop: 6,
    paddingTop: 4,
  },
});

{
  /* */
}
