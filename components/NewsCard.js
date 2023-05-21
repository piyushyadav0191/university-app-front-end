import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

const NewsCard = ({ title, description, url, image }) => {
  console.log(url);
  return (
    <ScrollView style={{ marginBottom: 20 }}>
      <View>
        <View style={styles.card}>
          <Image style={styles.image} source={{ uri: image }} />
          <Text style={styles.name}>{title}</Text>
          <View style={styles.divider}></View>
          <Text numberOfLines={2} style={styles.title}>
            {description}
          </Text>
          <Text
            style={{ fontSize: 16, fontWeight: "bold", color: "#00bcd4" }}
            onPress={() => Linking.openURL(url)}
          >
            Read more{" "}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  department: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: "#666",
  },
});
