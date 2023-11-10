import React from "react";
import { View, Text, Platform, TouchableOpacity } from "react-native";
import { receiptScreenStyles } from "./styles/Styles";
import { Image } from "react-native";
import { appIcons } from "../resources/Icons";
import BackButton from "../components/BackButton";

const Reciept: React.FunctionComponent<{}> = () => {
  return (
    <View style={receiptScreenStyles.container}>
      <View><BackButton/>
        <View
          style={{
            flexDirection: "column",
            gap: 20,
            alignItems: "center",
          }}
        >
          <Image source={appIcons.receiptScreen.icon1} />
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 22,
              fontWeight: "700",
            }}
          >
            My Receipt
          </Text>
        </View>

        {/* receipt design */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          {/* round button */}
          <View
            style={{
              flexDirection: "column",
              paddingTop: 100,
            }}
          >
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: "#7165E3",
                borderRadius: 50,
              }}
            ></View>
          </View>
          {/* transfer design */}
          <View
            style={{
              width: "85%",
              height: Platform.OS === "android" ? 450 : 430,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
            }}
          >
            <View>
              <View
                style={{
                  alignSelf: "center",
                  paddingTop: 20,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#FBD133",
                    height: 74,
                    width: 74,
                    borderRadius: 25,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image source={appIcons.receiptScreen.icon2} />
                </View>
              </View>
              <View
                style={{
                  alignSelf: "center",
                  paddingTop: 15,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "700",
                    color: "#1C1939",
                  }}
                >
                  Transfer Complete
                </Text>
              </View>
              <View style={receiptScreenStyles.divider}></View>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Image source={appIcons.receiptScreen.icon3} />
                  <View
                    style={{
                      flexDirection: "column",
                      gap: 5,
                      justifyContent: "center",
                      marginTop: -10,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 12,
                        color: "#9EA6BE",
                      }}
                    >
                      Recipient
                    </Text>
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 15,
                        color: "#1C1939",
                      }}
                    >
                      Hailey Sanders
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    paddingLeft: 20,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 12,
                      color: "#9EA6BE",
                    }}
                  >
                    Recipient
                  </Text>
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 15,
                      color: "#1C1939",
                    }}
                  >
                    #D79004321786
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 20,
                    paddingTop: 20,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 12,
                        color: "#9EA6BE",
                      }}
                    >
                      Amount Spent
                    </Text>
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 15,
                        color: "#1C1939",
                      }}
                    >
                      $46.09
                    </Text>
                  </View>
                  <View
                    style={{
                      marginLeft: 50,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 12,
                        color: "#9EA6BE",
                      }}
                    >
                      Transfer fee
                    </Text>
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 15,
                        color: "#1C1939",
                      }}
                    >
                      $0.00
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    paddingTop: 20,
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: "70%",
                      height: 52,
                      borderRadius: 10,
                      backgroundColor: "#7165E3",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 17,
                        color: "#FFFFFF",
                      }}
                    >
                      Share
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          {/* round button */}
          <View
            style={{
              flexDirection: "column",
              paddingTop: 100,
            }}
          >
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: "#7165E3",
                borderRadius: 50,
              }}
            ></View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 16,
              color: "#FFFFFF",
            }}
          >
            Your transfer will arrive to the recipient
          </Text>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 16,
              color: "#FFFFFF",
            }}
          >
            within 48 hours
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Reciept;
