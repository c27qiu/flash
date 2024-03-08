import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const GymMapScreen = ({ navigation }) => {
  const handleButtonPress = () => {
    // Navigate to a new blank page or perform any other action
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        {/* Replace 'mapImage' with the source of your map image */}
        <Image
          source={require("../../assets/images/GymMap.png")}
          style={styles.mapImage}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Button 2</Text>
        </TouchableOpacity>
        {/* Add more buttons as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  mapContainer: {
    flex: 1,
  },
  mapImage: {
    width: "100%",
    height: "50%",
    // resizeMode: "cover",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
  },
  button: {
    backgroundColor: "#FF6C00",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#FFFFFF",
  },
});

export default GymMapScreen;
