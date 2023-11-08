import { StyleSheet, Platform, Dimensions } from "react-native";

export const mainScreenStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  topView: {
    flex: 0.6,
    backgroundColor: "#7165E3",
    paddingTop: Platform.OS === "android" ? 60 : 70,
  },
  subTopView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  leftTopView: {
    display: "flex",
    flexDirection: "column",
    gap: 25,
  },
  topViewTopAvailableBal: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: Platform.OS === "android" ? 35 : 37,
  },
  topViewBottomAvailableBal: {
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: Platform.OS === "android" ? 15 : 17,
  },
  topViewLeftImage: {
    height: 20,
    width: 85,
  },
  bottomView: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  chartCardView: {
    width: "93%",
    height: 212,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "gainsboro",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: -115,
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  chartCardInnerTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 50,
    paddingBottom: 20,
  },
  divider: {
    borderBottomWidth: 0.5,
    borderColor: "gainsboro",
    display: "flex",
    position: "relative",
  },
  chartCardTopTextContent: {
    paddingTop: 20,
    color: "#1C1939",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    paddingLeft: 25,
    lineHeight: 20,
  },
  chartCardBottomTextContent: {
    paddingTop: 10,
    color: "#7165E3",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    paddingLeft: 28,
  },
  activityView: {
    display: "flex",
    flexDirection: "column",
    marginTop: 30,
    gap: 30,
  },
  activityText: {
    color: "#1C1939",
    fontWeight: "700",
    fontSize: 18,
    textAlign: "left",
    paddingLeft: 12,
    paddingTop: 30,
  },
  activityBtnView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  activityBtnImgView: {
    backgroundColor: "#7165E3",
    width: 38,
    height: 38,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  activityBtn: {
    backgroundColor: "#FFFFFF",
    width: 107,
    height: 114,
    borderWidth: 0.5,
    borderColor: "gainsboro",
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  activityBtnTxt: {
    fontWeight: "400",
    fontSize: 13,
    color: "#1C1939",
    paddingTop: 15,
  },
  verificationText: {
    color: "#1C1939",
    fontWeight: "700",
    fontSize: 18,
    textAlign: "left",
    paddingLeft: 12,
  },
  verificationView: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
  subVerificationView: {
    width: "93%",
    height: 490,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "gainsboro",
    alignSelf: "center",
    borderRadius: 10,
    position: "relative",
    display: "flex",
  },
  percentView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    width: "95%",
    alignSelf: "center",
    paddingTop: 30,
  },
  sevntyFivePercent: {
    color: "#1C1939",
    fontWeight: "700",
    fontSize: 25,
  },
  completedText: {
    color: "#1C1939",
    fontSize: 12,
    fontWeight: "400",
    paddingTop: 10,
  },
  progressBarView: {
    height: 10,
    backgroundColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
    margin: 10,
  },
  bar: {
    height: 10,
    backgroundColor: "#7165E3",
    width: "75%",
  },
  personalInformationView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  personalInformationText: {
    color: "#1C1939",
    fontWeight: "700",
    fontSize: 14,
  },
  personalInformationSubText: {
    color: "#1C1939",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 20,
  },
  personalInformation: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  personalInformationBottomText: {
    paddingTop: 10,
    color: "#7165E3",
    fontSize: 13,
    fontWeight: "700",
  },
  verificationView2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  subNewsAndPromo: {
    width: "95%",
    height: 322,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "gainsboro",
    alignSelf: "center",
    borderRadius: 10,
    position: "relative",
    display: "flex",
    overflow: "hidden",
  },
  newsAndPromo: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
  newsAndPromoText: {
    color: "#1C1939",
    fontWeight: "700",
    fontSize: 18,
    textAlign: "left",
    paddingLeft: 12,
    paddingTop: 20,
  },
});

export const detailsScreenStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topDetailScreen: {
    display: "flex",
    flex: 0.5,
    backgroundColor: "whitesmoke",
    paddingTop: Platform.OS === "android" ? 60 : 70,
    overflow: "hidden",
  },
  budgetView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  budgetText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#7165E3",
  },
  budgetBal: {
    fontWeight: "700",
    fontSize: 22,
  },
  budgetDesc1: {
    fontWeight: "400",
    fontSize: 15,
    color: "gray",
  },
  budgetDesc2: {
    fontWeight: "700",
    fontSize: 15,
  },
  budgetBalView: {
    alignItems: "center",
    top: 30,
  },
  imageView: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  topDetailScreenImage: {
    resizeMode: "cover",
    flex: 0.7,
    width: "100%",
  },
  bottomDetailView: {
    display: "flex",
    flex: 0.7,
    backgroundColor: "whitesmoke",
  },
  chartCardView: {
    width: "93%",
    height: 108,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "gainsboro",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: -40,
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  chartCardInnerTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 50,
    paddingBottom: 20,
  },
  transactionText: {
    color: "#1C1939",
    fontWeight: "700",
    fontSize: 18,
    textAlign: "left",
    paddingTop: 30,
    paddingBottom: 10,
  },
  divider: {
    borderBottomWidth: 0.5,
    borderColor: "gainsboro",
  },
  topTransactionView: {
    display: "flex",
    width: "90%",
    alignSelf: "center",
    flex: 1,
  },
  transactionListView: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20,
    paddingBottom: 10,
  },
  transactionName: {
    fontWeight: "700",
    fontSize: 16,
    color: "#1C1939",
  },
  transactionDesc: {
    fontWeight: "400",
    fontSize: 16,
    color: "gray",
  },
  transactionPrice: {
    fontWeight: "700",
    display: "flex",
    fontSize: 16,
    color: "#1C1939",
    paddingTop: 12,
  },
  categoryText: {
    color: "#1C1939",
    fontWeight: "700",
    fontSize: 18,
    textAlign: "left",
    paddingTop: 30,
    paddingBottom: 10,
  },
  categoryListView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: 20,
  },
  categoryList: {
    width: 155,
    backgroundColor: "#FFFFFF",
    height: 228,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "gainsboro",
    borderRadius: 10,
  },
  subCategoryListView: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    paddingTop: 25,
  },
  subCategoryListViewName: {
    fontWeight: "700",
    fontSize: 16,
  },
  subCategoryListViewPrice: {
    fontWeight: "400",
    fontSize: 15,
    color: "#1C1939",
    opacity: 0.6,
  },
  subCategoryListViewPriceButton: {
    backgroundColor: "#eaeaf1",
    width: 89,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  subCategoryListViewPriceBtnText: {
    fontWeight: "500",
    fontSize: 12,
    color: "#7D8CBA",
  },
});

export const savingScoreScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "whitesmoke",
  },
  topView: {
    display: "flex",
    flex: 0.8,
    backgroundColor: "#7165E3",
    paddingTop: Platform.OS === "android" ? 60 : 70,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  imageView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imageBckGrd: {
    width: 258,
    height: 228,
  },
  imageBckGrdTopText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 22,
    color: "#FFFFFF",
    paddingTop: 20,
    opacity: 0.97,
  },
  topViewBottomView: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
  },
  topViewBottomText1: {
    fontWeight: "700",
    fontSize: 22,
    color: "#FFFFFF",
    paddingTop: 3,
    opacity: 0.97,
  },
  topViewBottomText2: {
    fontWeight: "400",
    fontSize: 18,
    color: "#FFFFFF",
    opacity: 0.6,
  },
  recommendationText: {
    fontWeight: "700",
    fontSize: 18,
    color: "#1C1939",
    paddingTop: 30,
    opacity: 0.9,
    paddingLeft: 12,
  },
  recommendationSubView: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    flex: 1,
    gap: 10,
  },
  recommendationListView: {
    width: "93%",
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
  },
  recommendationSubListView: {
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    height: 164,
    justifyContent: "center",
    borderRadius: 20,
  },
  recommendationList: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  recommendationGradeView: {
    height: 52,
    width: 52,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7165E3",
    borderRadius: 15,
  },
  recommendationGradeText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 15,
  },
  recommendationName: {
    fontWeight: "700",
    fontSize: 16,
    color: "#9EA6BE",
  },
  recommendationDesc: {
    fontWeight: "700",
    fontSize: 13,
    color: "#1C1939",
  },
  recommendationBtn: {
    justifyContent: "center",
  },
  recommendationBtnText: {
    color: "#7165E3",
    fontWeight: "700",
    fontSize: 15,
  },
});
