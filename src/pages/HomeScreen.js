import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { HomeScreenImage } from "../assets/images/onboardingandOther/router";
import HomeStyle from "../styles/HomeStyle";

const HomeScreen = ({ navigation }) => {
  // Space between the area of the two btns
  const Spacer = ({ height }) => <View style={{ height }} />;
  return (
    <SafeAreaView style={HomeStyle.containerHome}>
      <View>
        <View style={HomeStyle.containerViewImage}>
          <Image
            source={HomeScreenImage}
            style={HomeStyle.containerImageStyle}
          />
        </View>
        <View style={HomeStyle.containerTextView}>
          <Text style={HomeStyle.containerTextStyle}>Welcome</Text>
          <Text style={HomeStyle.containerTextSecondStyle}>
            Before Enjoying Foodmedia Services Please Register first
          </Text>
        </View>
        <View style={HomeStyle.containerOptionAuthStyle}>
          <TouchableOpacity
            style={HomeStyle.containerBtnCreateStyle}
            activeOpacity={0.7}
            onPress={() => navigation.navigate("AuthScreen")}
          >
            <Text style={HomeStyle.containerBtnTxtCreateStyle}>
              Create Account
            </Text>
          </TouchableOpacity>
          <Spacer height={10} />
          <TouchableOpacity
            style={HomeStyle.containerBtnLoginStyle}
            activeOpacity={0.7}
            onPress={() => navigation.navigate("AuthScreen")}
          >
            <Text style={HomeStyle.containerBtnTxtLoginStyle}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={HomeStyle.containerAgreeTermStyle}>
          <TouchableOpacity>
            <Text style={HomeStyle.containerAgreeTextStyle}>
              By logging in or registering, you have agreed to the{" "}
              <Text style={HomeStyle.color}>Terms and Conditions</Text> and{" "}
              <Text style={HomeStyle.color}>Privacy Policy.</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
