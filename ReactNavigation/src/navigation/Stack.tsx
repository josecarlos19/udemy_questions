import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import StackPass from "../components/StackPass";
import ScreenA from "../views/ScreenA";
import ScreenB from "../views/ScreenB";
import ScreenC from "../views/ScreenC";

const Stack = createNativeStackNavigator()

export default props => (
  <Stack.Navigator initialRouteName="ScreenA">
    <Stack.Screen name="ScreenA" options={{ title: 'Initial Informations' }}>
      {props => (
        <StackPass {...props} next="ScreenB">
          <ScreenA />
        </StackPass>
      )}
    </Stack.Screen>

    <Stack.Screen name="ScreenB" options={{ title: 'Middle Informations' }}>
      {props => (
        <StackPass {...props} next="ScreenC" back nextParams={{number: 33}}>
          <ScreenB />
        </StackPass>
      )}
    </Stack.Screen>

    <Stack.Screen name="ScreenC" options={{ title: 'Last Informations' }}>
      {props => (
        <StackPass {...props} next="ScreenC" back>
          <ScreenC {...props} />
        </StackPass>
      )}
    </Stack.Screen>
  </Stack.Navigator>
)
