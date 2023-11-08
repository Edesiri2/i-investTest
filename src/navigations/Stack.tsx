import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../screens/Main";

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
    </Stacks.Navigator>
  );
};

export default Stack;
