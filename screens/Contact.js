import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Animated,
  Easing,
  StyleSheet,
  Image,
  Linking,
} from "react-native";
import { useSelector } from "react-redux";
import axios from "axios";
import feesIcon from "../assets/fees.jpg";
import formIcon from "../assets/form.png";
import resultIcon from "../assets/result.png";

function Contact() {
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [message, setMessage] = useState("");
  const [buttonAnim] = useState(new Animated.Value(0));

  const handleSubmit = async () => {
    await axios
      .post("https://university-form.onrender.com/contact", {
        name: name,
        email: email,
        message: message,
      })
      .then((response) => {
        alert("Message sent successfully!");
        setMessage("");
      })
      .catch((error) => {
        alert("Something went wrong. Please try again later.", error);
      });
  };

  const handlePress = () => {
    Animated.timing(buttonAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(buttonAnim, {
        toValue: 0,
        duration: 500,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }).start();
    });

    handleSubmit();
  };

  const buttonScale = buttonAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.5],
  });

  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ marginBottom: 12, marginVertical: 20 }}>
        <Text style={styles.text}>
          You want to know why I created the contact form? I created it for
          students and teachers to give reviews of the app or to report any
          difficulties they may be facing in college. All messages and reviews
          will be treated as private and secure and will not be shared with
          anyone except the head of the department.
        </Text>
      </View>

      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Write here🐧
      </Text>
      <View style={{ width: "80%", marginBottom: 20 }}>
        <Text style={{ marginBottom: 5 }}>Message:</Text>
        <TextInput
          value={message}
          onChangeText={(text) => setMessage(text)}
          multiline
          numberOfLines={4}
          style={{ borderWidth: 1, borderColor: "gray", padding: 10 }}
        />
      </View>
      <View onPress={handlePress}>
        <Animated.View
          style={{
            backgroundColor: "blue",
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 5,
            transform: [{ scale: buttonScale }],
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Submit</Text>
        </Animated.View>
      </View>

      <View style={{ marginBottom: 12, marginVertical: 20 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          Quick Links for students
        </Text>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Image source={feesIcon} style={styles.icon} />
          </View>
          <Text
            style={styles.name}
            onPress={() =>
              Linking.openURL(
                "https://bubhopal.mponline.gov.in/portal/Services/BARKATULLAH/utd/semfee/semfeesubmission.aspx"
              )
            }
          >
            Admission Fees
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Image source={formIcon} style={styles.icon} />
          </View>
          <Text
            style={styles.name}
            onPress={() =>
              Linking.openURL(
                "https://bubhopal.mponline.gov.in/Portal/Services/BARKATULLAH/utd/exam/Old_Exam/searchenroll.aspx"
              )
            }
          >
            Exam Form
          </Text>
        </View>

        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Image source={resultIcon} style={styles.icon} />
          </View>
          <Text
            style={styles.name}
            onPress={() =>
              Linking.openURL(
                "https://bubhopal.mponline.gov.in/Portal/Services/BARKATULLAH/Counterbase/Result/VeiwResult.aspx"
              )
            }
          >
            Result
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Contact;

const styles = StyleSheet.create({
  text: {
    textDecorationLine: "underline",
    fontStyle: "italic",
    fontSize: 12,
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontWeight: "bold",
  },
  linksContainer: {
    flexDirection: "row",
  },
  link: {
    paddingHorizontal: 10,
  },
});
