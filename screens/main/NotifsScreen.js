import React from "react";
import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import GymMapScreen from "../nestedScreen/GymMapScreen";
import MainBackSide from "../nestedScreen/MainBackSide";
import NotifsScreenPage from "../nestedScreen/NotifsScreenPage";

const NestedScreenGym = createStackNavigator();

const GymScreen = () => {
  return (
    <NestedScreenGym.Navigator>
      <NestedScreenGym.Screen
        name="NotifsScreenPage"
        component={NotifsScreenPage}
        options={{
          headerShown: false,
        }}
      />
      <NestedScreenGym.Screen
        name="HomeGymMap"
        component={GymMapScreen}
        options={{
          headerShown: false,
        }}
      />
      <NestedScreenGym.Screen
        name="MainBackSide"
        component={MainBackSide}
        options={{
          headerShown: false,
        }}
      />
    </NestedScreenGym.Navigator>
  );
};

export default GymScreen;
