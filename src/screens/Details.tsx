import React from "react";
import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { detailsScreenStyles } from "./styles/Styles";
import LeftIcon from "react-native-vector-icons/Entypo";
import { appIcons } from "../resources/Icons";
import { useNavigation, StackActions } from "@react-navigation/native";

const transactionList = [
  {
    name: "PizzaHut",
    desc: "4 Transactions",
    price: 200,
    image: appIcons.detailsScreen.icon2,
  },
  {
    name: "Amazon",
    desc: "3 Transactions",
    price: 180,
    image: appIcons.detailsScreen.icon3,
  },
  {
    name: "Subway",
    desc: "2 Transactions",
    price: 125,
    image: appIcons.detailsScreen.icon4,
  },
  {
    name: "PizzaHut",
    desc: "4 Transactions",
    price: 200,
    image: appIcons.detailsScreen.icon2,
  },
  {
    name: "Amazon",
    desc: "3 Transactions",
    price: 180,
    image: appIcons.detailsScreen.icon3,
  },
  {
    name: "Subway",
    desc: "2 Transactions",
    price: 125,
    image: appIcons.detailsScreen.icon4,
  },
];

const Details: React.FunctionComponent<{}> = () => {
  const navigation: any = useNavigation();
  return (
    <View style={detailsScreenStyles.container}>
      <View style={detailsScreenStyles.topDetailScreen}>
        <View style={detailsScreenStyles.budgetView}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(StackActions.replace("Main", {}));
            }}>
            <LeftIcon name='chevron-left' size={30} color={"#1C1939"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SavingScore");
            }}>
            <Text style={detailsScreenStyles.budgetText}>Set Budget</Text>
          </TouchableOpacity>
        </View>
        <View style={detailsScreenStyles.budgetBalView}>
          <Text style={detailsScreenStyles.budgetBal}>
            Your balance is $2,639
          </Text>
          <Text style={detailsScreenStyles.budgetDesc1}>
            Last month, you spent{" "}
            <Text style={detailsScreenStyles.budgetDesc2}>$2,719</Text>
          </Text>
        </View>
        <View style={detailsScreenStyles.imageView}>
          <Image
            source={appIcons.detailsScreen.icon1}
            style={detailsScreenStyles.topDetailScreenImage}
          />
        </View>
      </View>
      {/* bottom view */}
      <View style={detailsScreenStyles.bottomDetailView}>
        <View style={detailsScreenStyles.chartCardView}>
          <View style={detailsScreenStyles.chartCardInnerTop}>
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
                  $2,430
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
                  $1,460
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* top transactions */}
        <View style={detailsScreenStyles.topTransactionView}>
          <Text style={detailsScreenStyles.transactionText}>
            Top Transactions
          </Text>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {transactionList.map((list, index) => {
              return (
                <View key={index}>
                  <TouchableOpacity
                    style={detailsScreenStyles.transactionListView}>
                    <Image source={list.image} />
                    <View
                      style={{
                        flexDirection: "column",
                        gap: 5,
                      }}>
                      <Text style={detailsScreenStyles.transactionName}>
                        {list.name}
                      </Text>
                      <Text style={detailsScreenStyles.transactionDesc}>
                        {list.desc}
                      </Text>
                    </View>
                    <Text style={detailsScreenStyles.transactionPrice}>
                      ${list.price}
                    </Text>
                  </TouchableOpacity>
                  <View style={detailsScreenStyles.divider}></View>
                </View>
              );
            })}
            {/* category */}
            <View>
              <Text style={detailsScreenStyles.categoryText}>Top Category</Text>
              <View style={detailsScreenStyles.categoryListView}>
                {/* launch and dinner list view */}
                <View style={detailsScreenStyles.categoryList}>
                  <View style={detailsScreenStyles.subCategoryListView}>
                    <Image source={appIcons.detailsScreen.icon5} />
                    <Text style={detailsScreenStyles.subCategoryListViewName}>
                      Launch & Dinner
                    </Text>
                    <Text style={detailsScreenStyles.subCategoryListViewPrice}>
                      $450
                    </Text>
                    <TouchableOpacity
                      style={
                        detailsScreenStyles.subCategoryListViewPriceButton
                      }>
                      <Text
                        style={
                          detailsScreenStyles.subCategoryListViewPriceBtnText
                        }>
                        on track
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* medical allowances list view */}
                <View style={detailsScreenStyles.categoryList}>
                  <View style={detailsScreenStyles.subCategoryListView}>
                    <Image source={appIcons.detailsScreen.icon5} />
                    <Text style={detailsScreenStyles.subCategoryListViewName}>
                      Medical Allowances
                    </Text>
                    <Text style={detailsScreenStyles.subCategoryListViewPrice}>
                      $450
                    </Text>
                    <TouchableOpacity
                      style={
                        detailsScreenStyles.subCategoryListViewPriceButton
                      }>
                      <Text
                        style={
                          detailsScreenStyles.subCategoryListViewPriceBtnText
                        }>
                        on track
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Details;
