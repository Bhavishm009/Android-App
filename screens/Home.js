import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import makeApiCall from "../api/api";


const Home = () => {
  useEffect(() => {
    const url = "https://fullstack-app-8urj.onrender.com/api/githubjson";
    const method = "get";
    const headers = {
      "Content-Type": "application/json",
    };
    makeApiCall(url, method, headers)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

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

export default Home;
