import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../constants";
import { useRegisterMutation,useFetchDataQuery } from "../store/slices/apiSlice";
import { useSelector } from "react-redux";

export default function VerifyOtp() {
    const storeData = useSelector(state => state.api.mutations);
    let mutationsData = storeData
    console.log({...mutationsData},'dataaaaaaaa');
    
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View>
        <Text>VerifyOtp</Text>
      </View>
    </LinearGradient>
  );
}
