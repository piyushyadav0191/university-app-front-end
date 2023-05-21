// import { View, Text, StyleSheet } from "react-native";
// import React from "react";

// const NewsHeading = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>News R/T Barkatullah University</Text>
//     </View>
//   );
// };

// export default NewsHeading;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.23,
//     shadowRadius: 2.62,
//     elevation: 4,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333",
//     textAlign: "center",
//   },
// });

import React, { useState, useEffect } from "react";
import { View, Text, Animated, StyleSheet } from "react-native";

const NewsHeading = () => {
  const [colorAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorAnimation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(colorAnimation, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [colorAnimation]);

  const color = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["#FF0080", "#7928CA"],
  });

  return (
    <View style={styles.container}>
      <Animated.Text
        style={{
          color,
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        News R/T Barkatullah University
      </Animated.Text>
    </View>
  );
};

export default NewsHeading;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
