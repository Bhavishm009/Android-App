import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import makeApiCall from "../api/api";


const Timeline = () => {


  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style={{ flex: 1 }}>
        
      </View>
    </LinearGradient>
  );
};

export default Timeline;
