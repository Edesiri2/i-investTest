import React from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { savingScoreScreenStyles } from "./styles/Styles";
import { appIcons } from "../resources/Icons";

const recommendationList = [
  {
    grade: "+17",
    name: "Spending",
    desc:
      "You spent $468 on food. That's 50%" +
      "\n" +
      "higher than the average of the users.",
    buttonText: "More details",
  },
  {
    grade: "+8",
    name: "Credit",
    desc:
      "You were late to pay last month's card" +
      "\n" +
      "bills. Let's try to be on time this month.",
    buttonText: "More details",
  },
  {
    grade: "+8",
    name: "Credit",
    desc:
      "You were late to pay last month's card" +
      "\n" +
      "bills. Let's try to be on time this month.",
    buttonText: "More details",
  },
];

const SavingScore: React.FunctionComponent<{}> = () => {
  return (
    <View style={savingScoreScreenStyles.container}>
      {/* finance score */}
      <View style={savingScoreScreenStyles.topView}>
        <View style={savingScoreScreenStyles.imageView}>
          <ImageBackground
            source={appIcons.detailsScreen.icon7}
            style={savingScoreScreenStyles.imageBckGrd}>
            <Text style={savingScoreScreenStyles.imageBckGrdTopText}>
              Finance Score
            </Text>
          </ImageBackground>
          <View>
            <View style={savingScoreScreenStyles.topViewBottomView}>
              <Text style={savingScoreScreenStyles.topViewBottomText1}>
                It can be better
              </Text>
              <Text style={savingScoreScreenStyles.topViewBottomText2}>
                Below are some recommendations
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* recommendations */}
      <View style={savingScoreScreenStyles.recommendationSubView}>
        <Text style={savingScoreScreenStyles.recommendationText}>
          Recommendations
        </Text>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            gap: 10,
          }}>
          {recommendationList.map((recommendation, index) => {
            return (
              <View
                key={index}
                style={savingScoreScreenStyles.recommendationListView}>
                <View style={savingScoreScreenStyles.recommendationSubListView}>
                  <View style={savingScoreScreenStyles.recommendationList}>
                    <View
                      style={savingScoreScreenStyles.recommendationGradeView}>
                      <Text
                        style={savingScoreScreenStyles.recommendationGradeText}>
                        {recommendation.grade}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "column",
                        gap: 15,
                      }}>
                      <Text style={savingScoreScreenStyles.recommendationName}>
                        {recommendation.name}
                      </Text>
                      <Text style={savingScoreScreenStyles.recommendationDesc}>
                        {recommendation.desc}
                      </Text>
                      <TouchableOpacity
                        style={savingScoreScreenStyles.recommendationBtn}>
                        <Text
                          style={savingScoreScreenStyles.recommendationBtnText}>
                          {recommendation.buttonText}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default SavingScore;
