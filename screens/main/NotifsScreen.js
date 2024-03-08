import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const NotifsScreen = ({ navigation }) => {
  const handleButtonPress = () => {
    // Navigate to a new blank page or perform any other action
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
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
});

export default NotifsScreen;
