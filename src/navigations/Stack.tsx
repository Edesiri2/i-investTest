import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../screens/Main";
import Details from "../screens/Details";
import SavingScore from "../screens/SavingScore";

const Stacks = createNativeStackNavigator();

const Stack: React.FunctionComponent<{}> = () => {
  return (
    <Stacks.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stacks.Screen
        name='Main'
        component={Main}
        options={{
          animation: "simple_push",
        }}
      />
      <Stacks.Screen
        name='Details'
        component={Details}
        options={{
          animation: "slide_from_right",
        }}
      />
      <Stacks.Screen
        name='SavingScore'
        component={SavingScore}
        options={{
          animation: "slide_from_left",
        }}
      />
    </Stacks.Navigator>
  );
};

export default Stack;
