import React from "react";
import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { mainScreenStyles } from "./styles/Styles";
import { appIcons } from "../resources/Icons";
import UserIcon from "react-native-vector-icons/FontAwesome";
import IdCard from "react-native-vector-icons/AntDesign";
import Mail from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation, StackActions } from "@react-navigation/native";

const activityButton = [
  {
    icon: appIcons.mainScreen.icon4,
    text: "Transfer",
    navigation: "Transfer",
  },
  {
    icon: appIcons.mainScreen.icon5,
    text: "My Card",
    navigation: "MyCard",
  },
  {
    icon: appIcons.mainScreen.icon6,
    text: "Insight",
    navigation: "Details",
  },
];

const Main: React.FunctionComponent<{}> = () => {
  const navigation: any = useNavigation();
  return (
    <View style={mainScreenStyles.container}>
      <View style={mainScreenStyles.topView}>
        <View style={mainScreenStyles.subTopView}>
          <View style={mainScreenStyles.leftTopView}>
            <Image
              source={appIcons.mainScreen.icon3}
              style={mainScreenStyles.topViewLeftImage}
            />
            <Text style={mainScreenStyles.topViewTopAvailableBal}>$ 7,425</Text>
            <Text style={mainScreenStyles.topViewBottomAvailableBal}>
              Available Balance
            </Text>
          </View>
          <View>
            <Image source={appIcons.mainScreen.icon2} />
          </View>
        </View>
      </View>
      <View style={mainScreenStyles.bottomView}>
        <View style={mainScreenStyles.chartCardView}>
          <View style={mainScreenStyles.chartCardInnerTop}>
            {/* Spent */}
            <View>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 11,
                  color: "#1C1939",
                  paddingLeft: 25,
                }}>
                Spent
              </Text>
              <View
                style={{
                  flexDirection: "row",
                }}>
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 50,
                    backgroundColor: "#FF5141",
                    marginTop: 10,
                  }}></View>
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 24,
                    color: "#1C1939",
                    marginLeft: 15,
                  }}>
                  $1,460
                </Text>
              </View>
            </View>
            {/* Earned */}
            <View>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 11,
                  color: "#1C1939",
                  paddingLeft: 25,
                }}>
                Earned
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 50,
                    backgroundColor: "#967AF3",
                    marginTop: 10,
                  }}></View>
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 24,
                    color: "#1C1939",
                    marginLeft: 15,
                  }}>
                  $2,730
                </Text>
              </View>
            </View>
          </View>
          {/* Divider */}
          <View style={mainScreenStyles.divider}></View>
          <View>
            <Text style={mainScreenStyles.chartCardTopTextContent}>
              You spent $2,732 on dining out this month.{"\n"}This is 25% more
              than last month.
            </Text>
            <TouchableOpacity>
              <Text style={mainScreenStyles.chartCardBottomTextContent}>
                Tell me more
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={mainScreenStyles.activityText}>Activity</Text>
        <ScrollView>
          {/* Activity View */}
          <View style={mainScreenStyles.activityView}>
            <View style={mainScreenStyles.activityBtnView}>
              {activityButton.map((button, index) => {
                return (
                  <View key={index}>
                    <TouchableOpacity
                      style={mainScreenStyles.activityBtn}
                      onPress={() => {
                        navigation.dispatch(
                          StackActions.replace(button.navigation, {})
                        );
                      }}>
                      <View style={mainScreenStyles.activityBtnImgView}>
                        <Image source={button.icon} />
                      </View>
                      <Text style={mainScreenStyles.activityBtnTxt}>
                        {button.text}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
            {/* Complete Verification View */}
            <View style={mainScreenStyles.verificationView}>
              <Text style={mainScreenStyles.verificationText}>
                Complete Verification
              </Text>
              <View style={mainScreenStyles.subVerificationView}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                  }}>
                  <View style={mainScreenStyles.percentView}>
                    <Text style={mainScreenStyles.sevntyFivePercent}>75%</Text>
                    <Text style={mainScreenStyles.completedText}>
                      7 of 10% Completed
                    </Text>
                  </View>
                  <View>
                    <View style={mainScreenStyles.progressBarView}>
                      <View style={mainScreenStyles.bar}></View>
                    </View>
                  </View>
                  <View style={mainScreenStyles.divider}></View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}>
                    {/* icons */}
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}>
                      <UserIcon name='user' size={25} color={"#7165E3"} />

                      <IdCard
                        name='idcard'
                        size={25}
                        color={"#7165E3"}
                        style={{ paddingTop: 130 }}
                      />

                      <Mail
                        name='email'
                        size={25}
                        color={"#7165E3"}
                        style={{ paddingTop: 50 }}
                      />
                    </View>
                    {/* text */}
                    <View>
                      {/* personal information */}
                      <View style={mainScreenStyles.personalInformation}>
                        <Text style={mainScreenStyles.personalInformationText}>
                          Personal Information
                        </Text>
                        <Text
                          style={mainScreenStyles.personalInformationSubText}>
                          Please provide documents to verify{"\n"} your source
                          of income personal{"\n"}informmation.
                        </Text>
                        <TouchableOpacity>
                          <Text
                            style={
                              mainScreenStyles.personalInformationBottomText
                            }>
                            Continue
                          </Text>
                        </TouchableOpacity>
                        <View style={mainScreenStyles.divider}></View>
                      </View>
                      {/* verification */}
                      <View
                        style={[
                          mainScreenStyles.personalInformation,
                          { paddingTop: 10 },
                        ]}>
                        <Text style={mainScreenStyles.personalInformationText}>
                          Verification
                        </Text>
                        <TouchableOpacity>
                          <Text
                            style={
                              mainScreenStyles.personalInformationBottomText
                            }>
                            Continue
                          </Text>
                        </TouchableOpacity>
                        <View style={mainScreenStyles.divider}></View>
                      </View>
                      {/* email */}
                      <View
                        style={[
                          mainScreenStyles.personalInformation,
                          { paddingTop: 10 },
                        ]}>
                        <Text style={mainScreenStyles.personalInformationText}>
                          Confirm Email
                        </Text>
                        <TouchableOpacity>
                          <Text
                            style={
                              mainScreenStyles.personalInformationBottomText
                            }>
                            Continue
                          </Text>
                        </TouchableOpacity>
                        <View style={mainScreenStyles.divider}></View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={mainScreenStyles.newsAndPromo}>
            <Text style={mainScreenStyles.newsAndPromoText}>
              News and promo
            </Text>
            <View style={mainScreenStyles.subNewsAndPromo}>
              <ImageBackground
                source={appIcons.mainScreen.icon7}
                resizeMode='cover'
                style={{ flex: 0.8 }}>
                <Text
                  style={{
                    textAlign: "right",
                    paddingRight: 15,
                    paddingTop: 50,
                    fontWeight: "700",
                    fontSize: 22,
                    color: "#FFFFFF",
                  }}>
                  Get $12 free!
                </Text>
              </ImageBackground>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  paddingTop: 20,
                  paddingLeft: 10,
                }}>
                <Text
                  style={{ fontWeight: "700", fontSize: 16, color: "#1C1939" }}>
                  Invite your friends!
                </Text>
                <Text
                  style={{ fontWeight: "400", fontSize: 13, color: "#1C1939" }}>
                  For every user you invite and signs up, you can{"\n"}earn up
                  $5{" "}
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 15,
                      color: "#7165E3",
                    }}>
                    Invite Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Main;
