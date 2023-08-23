import React from "react";
import { View, Text } from "react-native";

const ViewBoxesWithColorAndText = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 0.5 }} />
      <View style={{ backgroundColor: "red", flex: 0.3 }} />
    </View>
  );
};

export default ViewBoxesWithColorAndText;