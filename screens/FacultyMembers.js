import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { facultyMemberData } from "../data/Faculty";
import FacultyText from "../utils/FacultyText";

const FacultyMembers = () => {
  const navigation = useNavigation();
  const handlePress = (subCourseName) => {
    navigation.navigate("SubFacultyScreen", { subCourseName });
  };

  return (
    <View>
      <FacultyText />
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <View style={{ flex: 1 }}>
          <ScrollView style={{ marginBottom: 100 }}>
            <View>
              {facultyMemberData
                .slice(0, Math.ceil(facultyMemberData.length / 2))
                .map((facultyMember, index) => {
                  return (
                    <TouchableOpacity
                      style={[styles.card, { marginRight: 10 }]}
                      onPress={() => handlePress(facultyMember.name)}
                      key={index}
                    >
                      <Image
                        style={styles.image}
                        source={facultyMember.image}
                      />
                      <Text style={styles.name}>{facultyMember.name}</Text>
                    </TouchableOpacity>
                  );
                })}
            </View>
          </ScrollView>
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView style={{ marginBottom: 100 }}>
            <View>
              {facultyMemberData
                .slice(
                  Math.ceil(facultyMemberData.length / 2),
                  facultyMemberData.length
                )
                .map((facultyMember, index) => {
                  return (
                    <TouchableOpacity
                      style={[styles.card, { marginLeft: 10 }]}
                      onPress={() => handlePress(facultyMember.name)}
                      key={index}
                    >
                      <Image
                        style={styles.image}
                        source={facultyMember.image}
                      />
                      <Text style={styles.name}>{facultyMember.name}</Text>
                    </TouchableOpacity>
                  );
                })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default FacultyMembers;

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
    columnGap: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
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
