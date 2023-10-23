import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import COLORS from "../constants/colors";
import { useRoute } from "@react-navigation/native";
import { useVerifyOtpMutation } from "../store/slices/apiSlice";

export default function VerifyOtp({ navigation }) {
  const [data, setData] = useState([]);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];
  const route = useRoute();
  useEffect(() => {
    const user = route.params?.user;
    setData(user.data);
    console.log(user);
  }, [route.params]);
  const [verifyOtp] = useVerifyOtpMutation();

  const id = data.user_id;
  const userOtp = otp.join("");
  const handleVerify = async () => {
    console.log("Handle Verify Clicked");
    try {
      // let userData = { id: id, otp: userOtp };
      // console.log("User Data:", userData); // Check the console for this log
      // const user = await verifyOtp(userData);
      // console.log("Verification Response:", user); // Check the console for this log
      // if (user.success) {
      //   navigation.navigate("Home");
      // }
      if (id && userOtp) {
        let otpData = { id: id, otp: userOtp };
        console.log("User Data:", otpData); // Add this line
        const user = await verifyOtp(otpData);
        console.log(user,'usseerrrrrrrrrrrrrrrrrrr');
        if (user.data.success) {
          navigation.navigate("Home");
        }
      } else {
        console.error("id or otp is not defined");
      }
    } catch (error) {
      console.log("Error:", error); // Check the console for this log
    }
  };
  const handleChangeText = (text, index) => {
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = text;

      if (text && index < 5) {
        inputRefs[index + 1].current.focus();
      } else if (!text && index > 0) {
        inputRefs[index - 1].current.focus();
      }

      return newOtp;
    });
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Verify OTP</Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={inputRefs[index]}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChangeText(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "#000",
    fontSize: 20,
    width: 40,
    height: 40,
    marginHorizontal: 5,
    textAlign: "center",
  },
  verifyButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  verifyButtonText: {
    color: "#FFF",
    fontSize: 18,
  },
});
