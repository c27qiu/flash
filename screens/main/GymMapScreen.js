import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import { authSignOutUser } from "../../redux/auth/authOperations";

const GymMapScreen = ({ navigation }) => {
  const handleButtonPress = () => {
    // Navigate to a new blank page or perform any other action
  };

  const signOut = () => {
    dispatch(authSignOutUser());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: 30,
          borderBottomColor: "#0000004D",
          borderWidth: 0.5,
          borderColor: "#ffffff",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            lineHeight: 22,
            color: "#212121",
            letterSpacing: -0.408,
            marginLeft: "35%",
          }}
        >
          Guelph Grotto
        </Text>
        <TouchableOpacity
          onPress={signOut}
          style={{ marginLeft: "30%", bottom: 3 }}
        >
          <Feather name="log-out" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <Image
            source={require("../../assets/images/GymMap.jpg")}
            style={styles.mapImage}
          />
        </View>
        <View style={styles.instructionsContainer}>
            <View
                style={{
                height: 40,
                borderBottomColor: "#0000004D",
                borderWidth: 0.5,
                borderColor: "#ffffff",
                flexDirection: "row",
                alignItems: "left",
                marginLeft: "5%"
                }}
            >
                <Text
                style={{
                    fontFamily: "Roboto-Medium",
                    fontSize: 17,
                    lineHeight: 35,
                    color: "#212121",
                    letterSpacing: -0.408,
                    marginLeft: "5%",
                    paddingTop: 10,
                }}
                >
                Select a wall to view current problems!
                </Text>
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <ScrollView style={styles.buttonScrollContainer}>
                <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                    <Text style={styles.buttonText}>Main Boulder Front Side</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                    <Text style={styles.buttonText}>Main Boulder Back Side</Text>
                </TouchableOpacity>
                <View style={{ height: 100 }}></View>
            </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
    },
    mapContainer: {
      height: "40%",
    //   backgroundColor: "#575656",
    },
    buttonScrollContainer: {
      flexGrow: 1,
      marginBottom: 88,
    },
    mapImage: {
      flex: 1, // Take up all available space within mapContainer
      width: null, // Reset width to override resizeMode="contain"
      height: null, // Reset height to override resizeMode="contain"
    },
    instructionsContainer: {
        position: "absolute",
        top: "40%", // Adjust the distance from the bottom as needed
        height: "8%",
    },
    buttonContainer: {
      position: "absolute",
      top: "48%",
      height: "100%",
      left: 0,
      right: 0,
      alignItems: "center",
      paddingBottom: 150,
    //   backgroundColor: "#E5E5E5", // Background color
    },
    button: {
      backgroundColor: "#FF6C00",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginBottom: 10, // Added to create space between buttons
    },
    buttonText: {
      fontFamily: "Roboto-Medium",
      fontSize: 16,
      color: "#FFFFFF",
    },
  });

export default GymMapScreen;
