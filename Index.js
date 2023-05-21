import { NavigationContainer } from "@react-navigation/native";
import Main from "./screens/Main";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import Register from "./screens/Register";
import CameraScreen from "./screens/Camera";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./redux/action";
import Loader from "./components/Loader";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ForgotPassword from "./screens/ForgotPassword";
import ChangePassword from "./screens/ChangePassword";
import Verification from "./screens/Verification";
import ResetPassword from "./screens/ResetPassword";
import SubDepartmentScreen from "./screens/SubDepartmentScreen";
import Footer from "./components/Footer";
import FacultyMembers from "./screens/FacultyMembers";
import Contact from "./screens/Contact";
import SubFacultyScreen from "./screens/SubFacultyScreen";
import News from "./modals/News";
import Map from "./screens/Map";

const Tab = createBottomTabNavigator();

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  return loading ? (
    <Loader />
  ) : (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={isAuthenticated ? "Main" : "Login"}
          screenOptions={{ headerShown: false }}
        >
          {isAuthenticated ? (
            <>
              <Tab.Screen
                name="Main"
                component={Main}
                options={{ tabBarStyle: { display: "none" } }}
              />
              <Tab.Screen
                name="Profile"
                component={Profile}
                options={{ tabBarStyle: { display: "none" } }}
              />
              <Tab.Screen
                name="Camera"
                component={CameraScreen}
                options={{ tabBarStyle: { display: "none" } }}
              />
              <Tab.Screen
                name="ChangePassword"
                component={ChangePassword}
                options={{ tabBarStyle: { display: "none" } }}
              />
              <Tab.Screen
                name="Verification"
                component={Verification}
                options={{ tabBarStyle: { display: "none" } }}
              />
              <Tab.Screen
                name="SubDepartmentScreen"
                component={SubDepartmentScreen}
                options={{ tabBarStyle: { display: "none" } }}
              />
              <Tab.Screen
                name="Contact"
                component={Contact}
                options={{ tabBarStyle: { display: "none" } }}
              />
              <Tab.Screen
                name="FacultyMembers"
                component={FacultyMembers}
                options={{ tabBarStyle: { display: "none" } }}
              />
              <Tab.Screen
                name="SubFacultyScreen"
                component={SubFacultyScreen}
                options={{ tabBarStyle: { display: "none" } }}
              />
              <Tab.Screen
                name="Map"
                component={Map}
                options={{ tabBarStyle: { display: "none" } }}
              />
              <Tab.Screen
                name="News"
                component={News}
                options={{ tabBarStyle: { display: "none" } }}
              />
            </>
          ) : (
            <>
              <Tab.Screen
                name="Login"
                component={Login}
                options={{ tabBarStyle: { display: "none" } }}
              />
              <Tab.Screen
                name="Register"
                component={Register}
                options={{ tabBarStyle: { display: "none" } }}
              />

              <Tab.Screen
                name="Camera"
                component={CameraScreen}
                options={{ tabBarStyle: { display: "none" } }}
              />
              <Tab.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{ tabBarStyle: { display: "none" } }}
              />
              <Tab.Screen
                name="ResetPassword"
                component={ResetPassword}
                options={{ tabBarStyle: { display: "none" } }}
              />
            </>
          )}
        </Tab.Navigator>
        {isAuthenticated && <Footer />}
      </NavigationContainer>
    </>
  );
};

export default Index;
