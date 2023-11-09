import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { transferScreenStyles } from "./styles/Styles";
import User from "react-native-vector-icons/FontAwesome";
import Bank from "react-native-vector-icons/FontAwesome";
import Wifi from "react-native-vector-icons/FontAwesome";
import Qrcode from "react-native-vector-icons/MaterialIcons";
import { appIcons } from "../resources/Icons";

const contactList = [
  {
    fname: "Hailey",
    lname: "Sanders",
    phone: "+090078601",
    image: appIcons.transferScreen.icon3,
    invite: true,
  },
  {
    fname: "Zayn",
    lname: "Michel",
    phone: "+090078601",
    image: appIcons.transferScreen.icon2,
    invite: true,
  },
  {
    fname: "Thomas",
    lname: "Denver",
    phone: "+090078601",
    image: appIcons.transferScreen.icon3,
    invite: false,
  },
];

const Transfer: React.FunctionComponent<{}> = () => {
  const [btnState, setBtnState] = useState<string>("mobile");
  return (
    <View style={transferScreenStyles.container}>
      {/* top screen */}
      <View style={transferScreenStyles.topView}>
        <View style={transferScreenStyles.transferView}>
          <Text style={transferScreenStyles.transferText}>Transfer</Text>
          <View style={transferScreenStyles.transferIconView}>
            {/* mobile */}
            <View style={transferScreenStyles.transferIconBtnView}>
              <TouchableOpacity
                style={[
                  transferScreenStyles.transferIconBtn,
                  {
                    backgroundColor:
                      btnState === "mobile" ? "#7C6EFF" : "#655AD9",
                  },
                ]}
                onPress={() => {
                  setBtnState("mobile");
                }}
              >
                <User
                  name="user"
                  color={btnState === "mobile" ? "#FFFFFF" : "gainsboro"}
                  size={25}
                />
              </TouchableOpacity>
              <Text style={transferScreenStyles.transferIconBtnText}>
                Mobile
              </Text>
            </View>
            {/* bank */}
            <View style={transferScreenStyles.transferIconBtnView}>
              <TouchableOpacity
                style={[
                  transferScreenStyles.transferIconBtn,
                  {
                    backgroundColor:
                      btnState === "bank" ? "#7C6EFF" : "#655AD9",
                  },
                ]}
                onPress={() => {
                  setBtnState("bank");
                }}
              >
                <Bank
                  name="bank"
                  color={btnState === "bank" ? "#FFFFFF" : "gainsboro"}
                  size={25}
                />
              </TouchableOpacity>
              <Text style={transferScreenStyles.transferIconBtnText}>Bank</Text>
            </View>
            {/* online */}
            <View style={transferScreenStyles.transferIconBtnView}>
              <TouchableOpacity
                style={[
                  transferScreenStyles.transferIconBtn,
                  {
                    backgroundColor:
                      btnState === "online" ? "#7C6EFF" : "#655AD9",
                  },
                ]}
                onPress={() => {
                  setBtnState("online");
                }}
              >
                <Wifi
                  name="wifi"
                  color={btnState === "online" ? "#FFFFFF" : "gainsboro"}
                  size={25}
                />
              </TouchableOpacity>
              <Text style={transferScreenStyles.transferIconBtnText}>
                Online
              </Text>
            </View>
            {/* qr code */}
            <View style={transferScreenStyles.transferIconBtnView}>
              <TouchableOpacity
                style={[
                  transferScreenStyles.transferIconBtn,
                  {
                    backgroundColor:
                      btnState === "qrCode" ? "#7C6EFF" : "#655AD9",
                  },
                ]}
                onPress={() => {
                  setBtnState("qrCode");
                }}
              >
                <Qrcode
                  name="qr-code-2"
                  color={btnState === "qrCode" ? "#FFFFFF" : "gainsboro"}
                  size={25}
                />
              </TouchableOpacity>
              <Text style={transferScreenStyles.transferIconBtnText}>
                QR code
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* middle view */}
      <View>
        <Text style={transferScreenStyles.recentText}>Recent</Text>
        <View>
          <FlatList
            data={contactList}
            keyExtractor={(item) => item.fname}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <>
                <TouchableOpacity
                  style={transferScreenStyles.recentFlatListBtn}
                >
                  <View style={transferScreenStyles.recentFlatListView}>
                    <Image
                      source={item.image}
                      style={transferScreenStyles.recentFlatListImg}
                    />
                    <View style={transferScreenStyles.recentFlatListSubView}>
                      <Text
                        style={
                          transferScreenStyles.recentFlatListSubViewNameText
                        }
                      >
                        {item.fname}
                      </Text>
                      <Text
                        style={
                          transferScreenStyles.recentFlatListSubViewDescText
                        }
                      >
                        {item.phone}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </>
            )}
          />
        </View>
      </View>

      {/* bottom view */}
      <View style={transferScreenStyles.bottomView}>
        <View>
          <Text style={transferScreenStyles.allContactsText}>All Contacts</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder="Search name or color"
            style={transferScreenStyles.searchTextInput}
          />
          <ScrollView>
            {contactList.map((items, index) => {
              return (
                <View key={index} style={transferScreenStyles.contactListView}>
                  <View style={transferScreenStyles.subContactListView}>
                    <Image
                      source={items.image}
                      style={transferScreenStyles.contactListImg}
                    />
                    <View style={transferScreenStyles.contactListInfoView}>
                      <Text>
                        {items.fname} {items.lname}
                      </Text>
                      <Text>{items.phone}</Text>
                    </View>
                    <View style={transferScreenStyles.contactListInviteView}>
                      {items.invite === true ? (
                        <TouchableOpacity
                          style={transferScreenStyles.contactListInviteBtn}
                        >
                          <Text
                            style={
                              transferScreenStyles.contactListInviteBtnText
                            }
                          >
                            invite
                          </Text>
                        </TouchableOpacity>
                      ) : null}
                    </View>
                  </View>
                  <View style={transferScreenStyles.divider}></View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Transfer;
