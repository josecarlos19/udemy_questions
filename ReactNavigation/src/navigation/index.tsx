import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { SafeAreaView } from "react-native";

import Drawer from "./Drawer";
import Stack from "./Stack";
import Tab from "./Tab";

const index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <Stack /> */}
        {/* <Tab /> */}
        <Drawer />
      </NavigationContainer>
    </SafeAreaView>
  )
};

export default index;
