import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import MaterialFixedLabelTextbox from "../components/MaterialFixedLabelTextbox";
import MaterialButtonHamburger2 from "../components/MaterialButtonHamburger";
import MaterialFixedLabelTextbox1 from "../components/MaterialFixedLabelTextbox";
import MaterialButtonHamburger3 from "../components/MaterialButtonHamburger";
import Icon from "react-native-vector-icons/Feather";
import MaterialSwitch from "../components/MaterialSwitch";

function SignUpSetUp(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.ellipseStack}>
          <Svg viewBox="0 0 145.3 143.81" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(221,110,66,1)"
              cx={73}
              cy={72}
              rx={73}
              ry={72}
            ></Ellipse>
          </Svg>
        
        </View>
        <Text style={styles.changePhoto}>Change Photo</Text>
        <View style={styles.rect2}>
          <Text style={styles.userName}>UserName:</Text>
          <View style={styles.materialFixedLabelTextboxRow}>
            <MaterialFixedLabelTextbox
              style={styles.materialFixedLabelTextbox}
            ></MaterialFixedLabelTextbox>
            <MaterialButtonHamburger2
              style={styles.materialButtonHamburger2}
            ></MaterialButtonHamburger2>
          </View>
          <Text style={styles.password}>Password:</Text>
          <View style={styles.materialFixedLabelTextbox1Row}>
            <MaterialFixedLabelTextbox1
              style={styles.materialFixedLabelTextbox1}
            ></MaterialFixedLabelTextbox1>
            <MaterialButtonHamburger3
              style={styles.materialButtonHamburger3}
            ></MaterialButtonHamburger3>
          </View>
          <Text style={styles.notifications}>Notifications:</Text>
          <View style={styles.iconRow}>
            <Icon name="moon" style={styles.icon}></Icon>
            <Text style={styles.doNotDisturb}>Do Not Disturb</Text>
            <MaterialSwitch style={styles.materialSwitch}></MaterialSwitch>
          </View>
          <Text style={styles.qrCode}>QR Code:</Text>
          <View style={styles.rect3}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect1: {
    width: 349,
    height: 763,
    backgroundColor: "rgba(79,109,122,1)",
    marginTop: 35,
    marginLeft: 13
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 145,
    height: 144,
    position: "absolute"
  },
  image1: {
    top: 11,
    left: 5,
    width: 136,
    height: 129,
    position: "absolute"
  },
  ellipseStack: {
    width: 145,
    height: 144,
    marginTop: 21,
    marginLeft: 102
  },
  changePhoto: {
    fontFamily: "Roboto",
    color: "rgba(74,144,226,1)",
    fontSize: 17,
    marginTop: 7,
    marginLeft: 125
  },
  rect2: {
    width: 319,
    height: 549,
    backgroundColor: "#E6E6E6",
    marginTop: 12,
    marginLeft: 18
  },
  userName: {
    fontFamily: "Roboto",
    color: "#121212",
    height: 23,
    width: 93,
    marginTop: 27,
    marginLeft: 13
  },
  materialFixedLabelTextbox: {
    height: 43,
    width: 234,
    backgroundColor: "#fff"
  },
  materialButtonHamburger2: {
    height: 36,
    width: 36,
    backgroundColor: "rgba(221,110,66,1)",
    marginLeft: 20,
    marginTop: 3
  },
  materialFixedLabelTextboxRow: {
    height: 43,
    flexDirection: "row",
    marginLeft: 13,
    marginRight: 16
  },
  password: {
    fontFamily: "Roboto",
    color: "#121212",
    height: 23,
    width: 93,
    marginTop: 30,
    marginLeft: 13
  },
  materialFixedLabelTextbox1: {
    height: 43,
    width: 234,
    backgroundColor: "#fff"
  },
  materialButtonHamburger3: {
    height: 36,
    width: 36,
    backgroundColor: "rgba(221,110,66,1)",
    marginLeft: 20,
    marginTop: 4
  },
  materialFixedLabelTextbox1Row: {
    height: 43,
    flexDirection: "row",
    marginLeft: 13,
    marginRight: 16
  },
  notifications: {
    fontFamily: "Roboto",
    color: "#121212",
    marginTop: 31,
    marginLeft: 13
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 41,
    width: 40
  },
  doNotDisturb: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 20,
    marginLeft: 7,
    marginTop: 9
  },
  materialSwitch: {
    width: 45,
    height: 23,
    marginLeft: 12,
    marginTop: 10
  },
  iconRow: {
    height: 41,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 13,
    marginRight: 72
  },
  qrCode: {
    fontFamily: "Roboto",
    color: "#121212",
    marginTop: 39,
    marginLeft: 13
  },
  rect3: {
    width: 179,
    height: 164,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 19,
    marginLeft: 60
  }
});

export default SignUpSetUp;
