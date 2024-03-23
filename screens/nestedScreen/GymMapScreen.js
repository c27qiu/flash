import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Feather, FontAwesome } from "@expo/vector-icons";

// import { authSignOutUser } from '../../redux/auth/authOperations';

import MainBoulder from "../../assets/images/gym-map-components/mainBoulder.svg";
import BackBoulder from "../../assets/images/gym-map-components/backBoulder.svg";
import FrontDesk from "../../assets/images/gym-map-components/frontDoor.svg";
import AerialSilk from "../../assets/images/gym-map-components/aerialSilksArea.svg";
import KilterBoard from "../../assets/images/gym-map-components/kilterBoard.svg";
import LeadAlcove from "../../assets/images/gym-map-components/leadAlcove.svg";
import ProgramAlley from "../../assets/images/gym-map-components/programAlley.svg";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const GymMapScreen = ({ navigation, route }) => {
  // handling props from navigation page
  useEffect(() => {
    const { fromNotifsPage, wallScreenToShow, imagePath, dateOfImage } =
      route.params || {};

    if (fromNotifsPage) {
      navigation.navigate(wallScreenToShow, {
        imagePath: imagePath,
        dateOfImage: dateOfImage,
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
        {/* <TouchableOpacity
					onPress={signOut}
					style={{ marginLeft: '15%', bottom: 3 }}
				>
					<Feather name='log-out' size={24} color='#573926' />
				</TouchableOpacity> */}
      </View>
      <View style={styles.mapContainer}>
        {/* Height: 844, Width: 390 */}
        <LeadAlcove style={{ position: "absolute", left: "5%", top: "2%" }} />
		<TouchableOpacity style={{ position: "absolute", left: "23%", top: "10%"}}>
			<FontAwesome name="circle" size={22} color={"#272B3E"} opacity={0.76}/>
		</TouchableOpacity>
		<TouchableOpacity style={{ position: "absolute", left: "79%", top: "10%"}}>
			<FontAwesome name="circle" size={22} color={"#272B3E"} opacity={0.76}/>
		</TouchableOpacity>
		<TouchableOpacity style={{ position: "absolute", left: "75%", top: "2%"}}>
			<FontAwesome name="circle" size={22} color={"#272B3E"} opacity={0.76}/>
		</TouchableOpacity>
		<TouchableOpacity style={{ position: "absolute", left: "26%", top: "2%"}}>
			<FontAwesome name="circle" size={22} color={"#272B3E"} opacity={0.76}/>
		</TouchableOpacity>

		<MainBoulder style={{ position: "absolute", left: "18%", top: "25%"}}/>
		<TouchableOpacity 
			style={{ position: "absolute", left: "60%", top: "37%"}}
			onPress={() => handleButtonPress('MainBackSide')}
		>
			<FontAwesome name="circle" size={22} color={"#272B3E"} opacity={0.76}/>
		</TouchableOpacity>
		<TouchableOpacity style={{ position: "absolute", left: "25%", top: "26%"}}>
			<FontAwesome name="circle" size={22} color={"#272B3E"} opacity={0.76}/>
		</TouchableOpacity>
		<TouchableOpacity style={{ position: "absolute", left: "25%", top: "36%"}}>
			<FontAwesome name="circle" size={22} color={"#272B3E"} opacity={0.76}/>
		</TouchableOpacity>
		<TouchableOpacity style={{ position: "absolute", left: "56%", top: "25%"}}>
			<FontAwesome name="circle" size={22} color={"#272B3E"} opacity={0.76}/>
		</TouchableOpacity>

        <BackBoulder style={{ position: "absolute", left: "5%", top: "35%" }} />
		<TouchableOpacity style={{ position: "absolute", left: "19%", top: "42%"}}>
			<FontAwesome name="circle" size={22} color={"#272B3E"} opacity={0.76}/>
		</TouchableOpacity>

        <FrontDesk style={{ position: "absolute", left: "80%", top: "50%" }} />

        <KilterBoard style={{ position: "absolute", left: "5%", top: "15%" }} />
		<TouchableOpacity style={{ position: "absolute", left: "15%", top: "18%"}}>
			<FontAwesome name="circle" size={22} color={"#272B3E"} opacity={0.76}/>
		</TouchableOpacity>

        <AerialSilk style={{ position: "absolute", left: "5%", top: "53%" }} />

        <ProgramAlley style={{ position: "absolute", left: "15%", top: "65%" }}/>
		<TouchableOpacity style={{ position: "absolute", left: "30%", top: "70%"}}>
			<FontAwesome name="circle" size={22} color={"#272B3E"} opacity={0.76}/>
		</TouchableOpacity>
		<TouchableOpacity style={{ position: "absolute", left: "65%", top: "70%"}}>
			<FontAwesome name="circle" size={22} color={"#272B3E"} opacity={0.76}/>
		</TouchableOpacity>
		<TouchableOpacity style={{ position: "absolute", left: "20%", top: "75%"}}>
			<FontAwesome name="circle" size={22} color={"#272B3E"} opacity={0.76}/>
		</TouchableOpacity>
		<TouchableOpacity style={{ position: "absolute", left: "78%", top: "74%"}}>
			<FontAwesome name="circle" size={22} color={"#272B3E"} opacity={0.76}/>
		</TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE5C4",
  },
  mapContainer: {
    height: "100%",
  },
});

export default GymMapScreen;
