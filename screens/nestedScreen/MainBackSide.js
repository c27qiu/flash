import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import MainBackSideImage from "../../assets/images/MainBackSide.jpg";

import { Shadow } from "react-native-shadow-2";

const MainBackSide = ({ navigation, route }) => {
  const [imageSource, getImageSource] = useState(null);
  const [ImageTime, getImageTime] = useState(null);
  const [imageWidth, setImageWidth] = useState(null);
  const [imageHeight, setImageHeight] = useState(null);
  const [gradesCountMap, setGradeMapProp] = useState({});

  const defaultGradesCount = {
    yellow: 0,
    green: 0,
    blue: 0,
    red: 0,
    orange: 0,
    purple: 0,
    black: 0,
  };

  useEffect(() => {
    const calculateImageSize = async () => {
      const source = Image.resolveAssetSource(MainBackSideImage);
      const screenWidth = Dimensions.get("window").width;
      const calculatedWidth = screenWidth * 0.84;
      const aspectRatio = source.width / source.height;
      const calculatedHeight = calculatedWidth / aspectRatio;
      setImageWidth(calculatedWidth);
      setImageHeight(calculatedHeight);
    };

    calculateImageSize();

    // TODO: FIX THIS!! THIS IS A BUG!!
    getImageSource(
      route?.params?.imagePath ||
        "https://fydp-photos.s3.us-east-2.amazonaws.com/raw-pi-photos/Feb29-11PM.jpg"
    );
    getImageTime(route?.params?.dateOfImage || "February 29, 2024");
    setGradeMapProp(
      route?.params?.grades || defaultGradesCount
    )
  }, []);


  // Define a map of letter grades to colors
  const gradeColorMap = {
    header: "header",
    yellow: "VB-V0",
    green: "V0-V1",
    blue: "V1-V3",
    red: "V3-V4",
    orange: "V4-V5",
    purple: "V5-V7",
    black: "V8+",
  };

  // Function to render buttons for each grade
  const renderGradeButtons = () => {
    return Object.entries(gradeColorMap).map(([color, grade], index) => {
      const isTopRow = index === 0;
      const isBottomRow = index === Object.entries(gradeColorMap).length - 1;

      if (isTopRow) {
        return (
          <View key={`header-row`} style={styles.headerRow}>
            <Text style={styles.header}>Tape Colour</Text>
            <Text style={styles.header} alignItems={"center"} marginLeft={"5.5%"}>V Grade</Text>
            <Text style={styles.header}># of Problems</Text>
            <View />
          </View>
        );
      }

      return (
        <View
          key={grade}
          style={[
            styles.row,
            { 
              backgroundColor: index % 2 === 0 ? "#FFF2E3" : "#FFECD5",
              borderTopLeftRadius: isTopRow ? 8 : 0,
              borderTopRightRadius: isTopRow ? 8 : 0,
              borderBottomLeftRadius: isBottomRow ? 8 : 0,
              borderBottomRightRadius: isBottomRow ? 8 : 0,
            },
          ]}
        >
          <FontAwesome name="circle" marginLeft={"12%"} size={20} color={color} />
          <Text style={styles.chartTextStyle}>{grade}</Text>
          <Text style={styles.chartTextStyle} marginRight={"16%"}>{gradesCountMap[color]}</Text>
        </View>
      );
    });
  };
  
  // TODO: maybe change the View back into a SafeAreaView with better spacing
  return (
    <View style={styles.container}>
      <View
        style={{
          height: "15%",
          flexDirection: "row",
          justifyContent: "left",
          alignItems: "flex-end",
          backgroundColor: "#FFE5C4",
        }}
      >
        <Feather
          name="map-pin"
          size={22}
          color="#573926"
          marginLeft={"5%"}
          marginBottom={"5%"}
        />
        <Text
          style={{
            fontFamily: "Epilogue-SemiBold",
            fontSize: 18,
            lineHeight: 22,
            color: "#573926",
            letterSpacing: -0.408,
            marginLeft: "2%",
            marginBottom: "5%",
          }}
        >
          Guelph Grotto Climbing Gym
        </Text>
      </View>
      <View style={styles.pageTitleContainer}>
        <Text style={styles.pageTitle}>Main Boulder: Back Side</Text>
      </View>
      <View style={styles.test}>
        {imageWidth && imageHeight && (
          <Image
            source={{ uri: imageSource }}
            height={imageHeight}
            width={imageWidth}
            style={styles.image}
          />
        )}
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>Last Updated: {ImageTime}</Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Current Problems</Text>
      </View>

      {/* <Shadow style={styles.gradeButtonsContainer}>
          <View style={styles.row}>
            <Text style={styles.header}>Grade</Text>
            <Text style={styles.header}>Name</Text>
            <Text style={styles.header}>Ascents</Text>
            <View />
          </View>
          <ScrollView>
            {renderGradeButtons()}
          </ScrollView>
      </Shadow> */}
      {/* <Shadow containerStyle={styles.gradeButtonsContainer}> */}
        <View style={styles.gradeButtonsContainer}>
          {renderGradeButtons()}
        </View>
      {/* </Shadow> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE5C4",
  },
  header: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  pageTitleContainer: {
    height: 40,
    flexDirection: "row",
    alignItems: "left",
  },
  pageTitle: {
    fontFamily: "Epilogue-Medium",
    fontSize: 16,
    lineHeight: 35,
    color: "#371B34",
    marginLeft: "8%",
    paddingTop: 10,
  },
  image: {
    borderRadius: 8,
  },
  imageContainer: {
    marginLeft: "8%",
    marginRight: "8%",
    marginTop: "2%",
  },
  test: {
    marginLeft: "8%",
    marginRight: "8%",
    marginTop: "2%",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dateContainer: {
    marginRight: "8%",
    marginTop: "3%",
    alignItems: "flex-end",
    height: "3%",
  },
  dateText: {
    color: "#707070",
    fontFamily: "Rubik-Regular",
  },
  subtitleContainer: {
    marginRight: "5%",
    marginTop: "0%",
    alignItems: "left",
    height: "5%",
  },
  subtitle: {
    fontFamily: "Epilogue-Medium",
    fontSize: 16,
    lineHeight: 35,
    color: "#371B34",
    marginLeft: "8%",
  },
  gradeButtonsContainer: {
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "10%",
    radius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF2E3",
    height: "7.5%",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF2E3",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: "7.5%",
  },
  chartTextStyle: {
    fontFamily: "Rubik-Regular"
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  viewBetaButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  viewBetaButtonText: {
    color: "#FFFFFF",
  },
  header: {
    fontFamily: "Epilogue-Medium",
    fontWeight: "bold",
    marginLeft:  "4%"
  },
});

export default MainBackSide;
