import { View, Text } from "react-native";
import React from "react";
import FacultyCardMain from "../components/FacultyCardMain";

const SubFacultyScreen = ({ route }) => {
  console.log(route.params.subCourseName);
  return (
    <View>
      {route.params.subCourseName === "Courses Offered" && (
        <FacultyCardMain data="it, cse, mech" />
      )}
      {route.params.subCourseName === "Administration" && (
        <FacultyCardMain data="admin" />
      )}
      {route.params.subCourseName === "HOD" && <FacultyCardMain data="hod" />}
      {route.params.subCourseName === "Satya Bhavan" && (
        <FacultyCardMain data="satya " />
      )}
      {route.params.subCourseName === "Office" && (
        <FacultyCardMain data="resukt oofice" />
      )}
      {route.params.subCourseName === "Director" && (
        <FacultyCardMain data="director" />
      )}
    </View>
  );
};

export default SubFacultyScreen;
