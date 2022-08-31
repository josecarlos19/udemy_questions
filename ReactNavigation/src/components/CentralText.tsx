import React from "react";
import { Text, View } from "react-native";

const CentralText = (props: any) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', backgroundColor: props.backGroundColor || '#000' }}>
      <Text style={{ fontSize: 50, color: props.textColor || '#FFF' }}>{props.children}</Text>
    </View>
  )
};

export default CentralText;
