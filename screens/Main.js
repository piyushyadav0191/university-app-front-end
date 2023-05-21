import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import SearchInput from "../modals/SearchInput";
import LabsText from "../utils/LabsText";
import Welcome from "../utils/Welcome";
import { departments } from "../data/Department";
import { useSelector } from "react-redux";

const Main = () => {
  const { user } = useSelector((state) => state.auth);
  const navigation = useNavigation();
  const [activeJobType, setActiveJobType] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleDepartmentPress = (department) => {
    setSelectedDepartment(department);
  };

  const handleSubDepartmentPress = (subDepartmentName) => {
    navigation.navigate("SubDepartmentScreen", { subDepartmentName });
    console.log(subDepartmentName);
  };

  const labs = departments.find((department) => department.name === "labs");
  if (!labs) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={{ marginTop: 7 }}>
        <Welcome image={user.avatar.url} />
      </View>
      {/* Search Container */}
      <View style={styles.searchContainer}>
        <SearchInput
          departments={departments}
          handleSubDepartmentPress={handleSubDepartmentPress}
        />
      </View>
      {/* News COntainer */}
      <View style={styles.NewsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("News")}>
          <View style={styles.NewsIconContainer}>
            <Image source={require("../assets/news.gif")} />
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 16 }}
            >
              News
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* tabs container */}
      <View style={styles.tabsContainer}>
        <FlatList
          data={departments}
          renderItem={({ item }) => (
            <View style={{ marginTop: 9, paddingLeft: 5 }}>
              <TouchableOpacity
                style={styles.tab(activeJobType, item)}
                onPress={() => {
                  setActiveJobType(item);
                  handleDepartmentPress(item);
                }}
              >
                <Text style={styles.tabText(activeJobType, item)}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ columnGap: 6 }}
          horizontal
        />
      </View>

      {/* Default cards*/}

      {!selectedDepartment && (
        <View style={{ marginBottom: 400 }}>
          <LabsText />
          <FlatList
            data={labs.subDepartments}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              // onClick go to department
              <TouchableOpacity
                onPress={() => handleSubDepartmentPress(item.name)}
              >
                <View key={item.name} style={styles.card}>
                  <Image source={{ uri: item.photo }} style={styles.image} />
                  <Text style={styles.title}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
            style={{ flexGrow: 1 }}
          />
        </View>
      )}

      {/* on click on tabs */}

      <View>
        <View style={{ marginBottom: 350 }}>
          {selectedDepartment && (
            <FlatList
              data={selectedDepartment.subDepartments}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSubDepartmentPress(item.name)}
                >
                  <View style={styles.card}>
                    <Image style={styles.image} source={{ uri: item.photo }} />
                    <Text style={styles.title}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.name}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  NewsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99999,
  },
  NewsIconContainer: {
    position: "absolute",
    bottom: -500,
    right: -180,
    zIndex: 99999,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
  container: {
    width: "100%",
    flex: 1,
  },

  welcomeMessage: {
    fontSize: 24,
    color: "#312651",
    marginTop: 2,
  },
  JobTypeHeading: {
    fontSize: 24,
    marginTop: 6,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: "#F3F4F8",
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    height: "100%",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: "#FF7754",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
  },
  tabsContainer: {
    width: "100%",
    marginTop: 6,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: 12 / 2,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: activeJobType === item ? "#2898FF" : "white",
  }),
  tabText: (activeJobType, item) => ({
    color: activeJobType === item ? "white" : "black",
  }),

  card: {
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  image: {
    width: "100%",
    height: 165,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    marginHorizontal: 15,
  },
});
