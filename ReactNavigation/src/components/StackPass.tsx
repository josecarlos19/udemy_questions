import React from "react";
import { Button, Text, View } from "react-native";

const StackPass = (props: any) => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        {props.back ? <Button title="Back" onPress={() => props.navigation.goBack()} /> : false}
        {props.next ? <Button title="Next" onPress={() => props.navigation.navigate(
          props.next,
          props.nextParams
        )
        }
        />
          : false}
      </View>

      <View style={{ flex: 1 }}>
        {props.children}
      </View>
    </View>

  )
};

export default StackPass;
