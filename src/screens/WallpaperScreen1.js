import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialButtonPrimary6 from "../components/MaterialButtonPrimary";
import MaterialButtonShare2 from "../components/MaterialButtonShare";
import MaterialHeader16 from "$16";

function WallpaperScreen1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect3}>
        <View style={styles.rect4Row}>
          <View style={styles.rect4}>
            <View style={styles.timeline2Row}>
              <Text style={styles.timeline2}>Timeline</Text>
              <EntypoIcon name="clock" style={styles.icon4}></EntypoIcon>
            </View>
          </View>
          <View style={styles.rect5}>
            <View style={styles.timeline1Row}>
              <Text style={styles.timeline1}></Text>
              <Text style={styles.chat}>Chat</Text>
              <EntypoIcon name="chat" style={styles.icon6}></EntypoIcon>
            </View>
          </View>
          <View style={styles.rect6}>
            <View style={styles.settingsRow}>
              <Text style={styles.settings}>Settings</Text>
              <IoniconsIcon
                name="ios-settings"
                style={styles.icon5}
              ></IoniconsIcon>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rect7StackRow}>
        <View style={styles.rect7Stack}>
          <View style={styles.rect7}>
            <View style={styles.image6Stack}>
              
              <MaterialButtonPrimary6
                style={styles.materialButtonPrimary1}
              ></MaterialButtonPrimary6>
            </View>
          </View>
          
          <ImageBackground
            resizeMode="contain"
            style={styles.image3}
            imageStyle={styles.image3_imageStyle}
          >
            <View style={styles.image5Stack}>
          
            </View>
          </ImageBackground>
        </View>
        <View style={styles.rect8}></View>
        <View style={styles.rect9}></View>
      </View>
      <View style={styles.rect10}>
        <MaterialButtonShare2
          style={styles.materialButtonShare1}
        ></MaterialButtonShare2>
      </View>
      <MaterialHeader16 style={styles.materialHeader16}></MaterialHeader16>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    borderColor: "#000000",
    backgroundColor: "rgba(234,234,234,1)"
  },
  rect3: {
    width: 356,
    height: 45,
    backgroundColor: "rgba(192,214,223,1)",
    borderWidth: 1,
    borderColor: "#000000",
    flexDirection: "row",
    marginTop: 85,
    marginLeft: 10
  },
  rect4: {
    width: 114,
    height: 27,
    backgroundColor: "rgba(234,234,234,1)",
    flexDirection: "row"
  },
  timeline2: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 17,
    marginTop: 1
  },
  icon4: {
    color: "rgba(221,110,66,1)",
    fontSize: 19,
    height: 22,
    width: 19,
    marginLeft: 15
  },
  timeline2Row: {
    height: 22,
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    marginLeft: 8,
    marginTop: 3
  },
  rect5: {
    width: 103,
    height: 27,
    backgroundColor: "rgba(234,234,234,1)",
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 1
  },
  timeline1: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 17,
    marginTop: 1
  },
  chat: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 17,
    marginLeft: 12,
    marginTop: 1
  },
  icon6: {
    color: "rgba(221,110,66,1)",
    fontSize: 19,
    height: 22,
    width: 19,
    marginLeft: 22
  },
  timeline1Row: {
    height: 22,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 5,
    marginTop: 2
  },
  rect6: {
    width: 103,
    height: 27,
    backgroundColor: "rgba(234,234,234,1)",
    flexDirection: "row",
    marginLeft: 7
  },
  settings: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 17,
    marginTop: 2
  },
  icon5: {
    color: "rgba(221,110,66,1)",
    fontSize: 22,
    height: 24,
    width: 16,
    marginLeft: 10
  },
  settingsRow: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: 7,
    marginLeft: 8,
    marginTop: 2
  },
  rect4Row: {
    height: 28,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 9,
    marginTop: 8
  },
  rect7: {
    top: 17,
    left: 0,
    width: 96,
    height: 165,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#000000"
  },
  image6: {
    top: 0,
    left: 14,
    width: 80,
    height: 106,
    position: "absolute"
  },
  image2: {
    top: 28,
    left: 0,
    width: 57,
    height: 53,
    position: "absolute"
  },
  materialButtonPrimary1: {
    height: 27,
    width: 86,
    position: "absolute",
    left: 4,
    top: 37
  },
  image6Stack: {
    width: 94,
    height: 106,
    marginTop: 35,
    marginLeft: 1
  },
  image1: {
    top: 124,
    left: 1,
    width: 94,
    height: 59,
    position: "absolute"
  },
  image3: {
    top: 0,
    left: 1,
    width: 94,
    height: 103,
    position: "absolute"
  },
  image3_imageStyle: {},
  image5: {
    top: 0,
    left: 0,
    width: 37,
    height: 48,
    position: "absolute"
  },
  image4: {
    top: 41,
    left: 0,
    width: 49,
    height: 42,
    position: "absolute"
  },
  image5Stack: {
    width: 49,
    height: 83,
    marginTop: 19
  },
  rect7Stack: {
    width: 96,
    height: 183
  },
  rect8: {
    width: 96,
    height: 165,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#000000",
    marginLeft: 23,
    marginTop: 17
  },
  rect9: {
    width: 96,
    height: 165,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#000000",
    marginLeft: 23,
    marginTop: 17
  },
  rect7StackRow: {
    height: 183,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 19,
    marginRight: 22
  },
  rect10: {
    width: 96,
    height: 165,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#000000",
    marginTop: 20,
    marginLeft: 19
  },
  materialButtonShare1: {
    height: 38,
    width: 41,
    backgroundColor: "rgba(221,110,66,1)",
    marginTop: 64,
    marginLeft: 25
  },
  materialHeader16: {
    height: 56,
    width: 356,
    backgroundColor: "rgba(79,109,122,1)",
    marginTop: -478,
    marginLeft: 10
  }
});

export default WallpaperScreen1;
