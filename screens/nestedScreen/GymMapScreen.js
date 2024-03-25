import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Feather, FontAwesome } from "@expo/vector-icons";

// import { authSignOutUser } from '../../redux/auth/authOperations';

import MainBoulder from "../../assets/images/gym-map-components/mainBoulder.svg";
import BackBoulder from "../../assets/images/gym-map-components/backBoulder.svg";
import FrontDesk from "../../assets/images/gym-map-components/frontDoor.svg";
import AerialSilk from "../../assets/images/gym-map-components/aerialSilksArea.svg";
import KilterBoard from "../../assets/images/gym-map-components/kilterBoard.svg";
import LeadAlcove from "../../assets/images/gym-map-components/leadAlcove.svg";
import ProgramAlley from "../../assets/images/gym-map-components/programAlley.svg";

const GymMapScreen = ({ navigation, route }) => {
  // handling props from navigation page
  useEffect(() => {
    const { fromNotifsPage, wallScreenToShow, imagePath, dateOfImage, grades } =
      route.params || {};

    if (fromNotifsPage) {
      navigation.navigate(wallScreenToShow, {
        imagePath: imagePath,
        dateOfImage: dateOfImage,
        grades: grades,
      });
    }
  }, [route.params]);

  const handleButtonPress = (screenName) => {
    navigation.navigate(screenName);
  };

  // const signOut = () => {
  // 	dispatch(authSignOutUser());
  // };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: "15%",
          flexDirection: "row",
          justifyContent: "left",
          alignItems: "flex-end",
          backgroundColor: "#FDFDF3",
        }}
      >
        <Feather
          name="map-pin"
          size={22}
          color="#3C3C3C"
          marginLeft={"5%"}
          marginBottom={"5%"}
        />
        <Text
          style={{
            fontFamily: "Epilogue-SemiBold",
            fontSize: 18,
            lineHeight: 22,
            color: "#3C3C3C",
            letterSpacing: -0.408,
            marginLeft: "2%",
            marginBottom: "5%",
          }}
        >
          Guelph Grotto Climbing Gym
        </Text>
        {/* <TouchableOpacity
            onPress={signOut}
            style={{ marginLeft: '15%', bottom: 3 }}
          >
            <Feather name='log-out' size={24} color='#3C3C3C' />
          </TouchableOpacity> */}
      </View>
      <View style={styles.mapContainer}>
        {/* Height: 844, Width: 390 */}
        <LeadAlcove style={{ position: "absolute", left: "0.5%", top: "3%" }} />
        <TouchableOpacity
          style={{ position: "absolute", left: "23.5%", top: "13%" }}
        >
          <FontAwesome
            name="circle"
            size={22}
            color={"#4A6253"}
            opacity={0.76}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ position: "absolute", left: "94.5%", top: "13%" }}
        >
          <FontAwesome
            name="circle"
            size={22}
            color={"#4A6253"}
            opacity={0.76}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ position: "absolute", left: "78%", top: "3%" }}
        >
          <FontAwesome
            name="circle"
            size={22}
            color={"#4A6253"}
            opacity={0.76}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ position: "absolute", left: "28%", top: "3%" }}
        >
          <FontAwesome
            name="circle"
            size={22}
            color={"#4A6253"}
            opacity={0.76}
          />
        </TouchableOpacity>

        <MainBoulder style={{ position: "absolute", left: "22%", top: "30%" }}/>
        <TouchableOpacity
          style={{ position: "absolute", left: "74%", top: "45.5%" }}
          onPress={() => handleButtonPress("MainBackSide")}
        >
          <FontAwesome name="circle" size={22} color={"#4A6253"} opacity={0.76}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ position: "absolute", left: "30%", top: "31%" }}
        >
          <FontAwesome
            name="circle"
            size={22}
            color={"#4A6253"}
            opacity={0.76}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ position: "absolute", left: "30.5%", top: "43.5%" }}
        >
          <FontAwesome
            name="circle"
            size={22}
            color={"#4A6253"}
            opacity={0.76}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ position: "absolute", left: "69%", top: "30%" }}
        >
          <FontAwesome
            name="circle"
            size={22}
            color={"#4A6253"}
            opacity={0.76}
          />
        </TouchableOpacity>

        <BackBoulder style={{ position: "absolute", left: "5%", top: "45%" }} />
        <TouchableOpacity
          style={{ position: "absolute", left: "22%", top: "53.5%" }}
        >
          <FontAwesome
            name="circle"
            size={22}
            color={"#4A6253"}
            opacity={0.76}
          />
        </TouchableOpacity>

        <FrontDesk style={{ position: "absolute", left: "80%", top: "60%" }} />

        <KilterBoard style={{ position: "absolute", left: "5%", top: "19%" }} />
        <TouchableOpacity
          style={{ position: "absolute", left: "16%", top: "22.5%" }}
        >
          <FontAwesome
            name="circle"
            size={22}
            color={"#4A6253"}
            opacity={0.76}
          />
        </TouchableOpacity>

        <AerialSilk style={{ position: "absolute", left: "5%", top: "63%" }} />

        <ProgramAlley style={{ position: "absolute", left: "10%", top: "80%" }}/>
        <TouchableOpacity style={{ position: "absolute", left: "24.5%", top: "82.5%" }}>
          <FontAwesome
            name="circle"
            size={22}
            color={"#4A6253"}
            opacity={0.76}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ position: "absolute", left: "78%", top: "83%" }}>
          <FontAwesome
            name="circle"
            size={22}
            color={"#4A6253"}
            opacity={0.76}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ position: "absolute", left: "18%", top: "92%" }}>
          <FontAwesome
            name="circle"
            size={22}
            color={"#4A6253"}
            opacity={0.76}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ position: "absolute", left: "75.5%", top: "93.5%" }}>
          <FontAwesome
            name="circle"
            size={22}
            color={"#4A6253"}
            opacity={0.76}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDF3",
  },
  mapContainer: {
    height: "100%",
    backgroundColor: "#FCFFF5",
    marginBottom: 20,
    justifyContent: "center",
    paddingHorizontal: 20,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 2.3, height: 2.3 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingBottom: 35,
    height: 620,
    marginHorizontal: 20,
  },
});

export default GymMapScreen;
