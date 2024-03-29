import React from "react";

import { TouchableOpacity, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

import { useDispatch, useSelector } from "react-redux";

import { authSignOutUser } from "./redux/auth/authOperations";

import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import ProfileScreen from "./screens/main/ProfileScreen";
import CreatePostsScreen from "./screens/main/CreatePostsScreen";
import PostsScreen from "./screens/main/PostsScreen";
import GymScreen from "./screens/main/GymScreen";
import NotifsScreen from "./screens/main/NotifsScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  const dispatch = useDispatch();
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerStyle: {
          height: 88,
          shadowColor: "#0000004D",
          shadowOpacity: 0.5,
        },
        tabBarStyle:{
          height: 80,
          justifyContent: "center",
          backgroundColor: "#ECEFE0",
          opacity: 0.96,
          borderTopRightRadius: 34,
          borderTopLeftRadius: 34,
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
          position: 'absolute',
          paddingVertical: 20
        }
      }}
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name="home-outline"
              size={size}
              color="#4A6253"
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16, bottom: 4 }}
              onPress={() => dispatch(authSignOutUser())}
            >
              <Feather name="log-out" size={24} color="#FFEFDB" />
            </TouchableOpacity>
          ),
          headerShown: false,
        })}
      />
      <MainTab.Screen
        name="GymScreen"
        component={GymScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name="grid-outline"
              size={size}
              color="#4A6253"
            />
          ),
          headerShown: false,
        }}
      />
      <MainTab.Screen
        name="Create post"
        component={CreatePostsScreen}
        options={({ navigation, route }) => ({
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={{
                width: 70,
                height: 40,
                borderRadius: 30,
                backgroundColor: "#4A6253",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign
                name="plus"
                size={16}
                color="#fff"
                style={{ marginVertical: 12 }}
              />
            </View>
          ),
          tabBarLabel: "", // Hide label for "Create post" tab
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 16 }}>
              <AntDesign name="arrowleft" size={24} color="#212121" />
            </TouchableOpacity>
          ),
        })}
      />
      <MainTab.Screen
        name="NotifsScreen"
        component={NotifsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name="notifications-outline"
              size={size}
              color="#4A6253"
            />
          ),
          headerShown: false,
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name="person-outline"
              size={size}
              color="#4A6253"
            />
          ),
          headerShown: false,
        }}
      />
    </MainTab.Navigator>
  );
};
