import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import MaterialHeader2 from "../components/MaterialHeader";
import Svg, { Ellipse } from "react-native-svg";
import MaterialFixedLabelTextbox2 from "../components/MaterialFixedLabelTextbox";
import MaterialButtonHamburger6 from "../components/MaterialButtonHamburger";
import MaterialBasicFooter from "../components/MaterialBasicFooter";

function ChatScreen2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <MaterialHeader2 style={styles.materialHeader1}></MaterialHeader2>
          {/* <ImageBackground
            source={require("../assets/images/_MG_6484.JPG")}
            resizeMode="cover"
            style={styles.image7}
            imageStyle={styles.image7_imageStyle}
          > */}
            <View style={styles.rect7StackStack}>
              <View style={styles.rect7Stack}>
                <View style={styles.rect7}></View>
                <Svg viewBox="0 0 40.18 41.55" style={styles.ellipse}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(74,74,74,1)"
                    cx={20}
                    cy={21}
                    rx={20}
                    ry={21}
                  ></Ellipse>
                </Svg>
                
              </View>
              <View style={styles.rect8Stack}>
                <View style={styles.rect8}></View>
                <Svg viewBox="0 0 40.18 41.55" style={styles.ellipse1}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(74,74,74,1)"
                    cx={20}
                    cy={21}
                    rx={20}
                    ry={21}
                  ></Ellipse>
                </Svg>
                
              </View>
            </View>
            <View style={styles.rect9Stack}>
              <View style={styles.rect9}></View>
              <Svg viewBox="0 0 40.18 41.55" style={styles.ellipse2}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(74,74,74,1)"
                  cx={20}
                  cy={21}
                  rx={20}
                  ry={21}
                ></Ellipse>
              </Svg>
              
            </View>
            <View style={styles.rect10Stack}>
              <View style={styles.rect10}></View>
              <Svg viewBox="0 0 40.18 41.55" style={styles.ellipse4}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(74,74,74,1)"
                  cx={20}
                  cy={21}
                  rx={20}
                  ry={21}
                ></Ellipse>
              </Svg>
              
            </View>
            <View style={styles.rect11Stack}>
              <View style={styles.rect11}></View>
              <Svg viewBox="0 0 40.18 41.55" style={styles.ellipse3}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(74,74,74,1)"
                  cx={20}
                  cy={21}
                  rx={20}
                  ry={21}
                ></Ellipse>
              </Svg>
              
            </View>
            <View style={styles.rect12Stack}>
              <View style={styles.rect12}></View>
              <Svg viewBox="0 0 40.18 41.55" style={styles.ellipse5}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(74,74,74,1)"
                  cx={20}
                  cy={21}
                  rx={20}
                  ry={21}
                ></Ellipse>
              </Svg>
              
            </View>
            <View style={styles.materialFixedLabelTextbox1Row}>
              <MaterialFixedLabelTextbox2
                style={styles.materialFixedLabelTextbox1}
              ></MaterialFixedLabelTextbox2>
              <MaterialButtonHamburger6
                style={styles.materialButtonHamburger6}
              ></MaterialButtonHamburger6>
            </View>
          {/* </ImageBackground> */}
        </View>
        <MaterialBasicFooter
          style={styles.materialBasicFooter}
        ></MaterialBasicFooter>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect1: {
    width: 356,
    height: 755,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 3,
    borderColor: "#000000",
    left: 0,
    top: 0
  },
  materialHeader1: {
    height: 52,
    width: 356,
    backgroundColor: "rgba(79,109,122,1)"
  },
  image7: {
    width: 350,
    height: 649,
    marginTop: 1,
    marginLeft: 2
  },
  image7_imageStyle: {},
  rect7: {
    top: 0,
    left: 0,
    width: 158,
    height: 66,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  ellipse: {
    top: 46,
    left: 144,
    width: 40,
    height: 42,
    position: "absolute"
  },
  image9: {
    top: 46,
    left: 147,
    width: 35,
    height: 42,
    position: "absolute"
  },
  rect7Stack: {
    top: 0,
    left: 148,
    width: 184,
    height: 88,
    position: "absolute"
  },
  rect8: {
    top: 0,
    left: 38,
    width: 158,
    height: 66,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  ellipse1: {
    top: 38,
    left: 14,
    width: 40,
    height: 42,
    position: "absolute"
  },
  image11: {
    top: 42,
    left: 0,
    width: 68,
    height: 34,
    position: "absolute"
  },
  rect8Stack: {
    top: 85,
    left: 0,
    width: 196,
    height: 80,
    position: "absolute"
  },
  rect7StackStack: {
    width: 332,
    height: 165,
    marginTop: 16,
    marginLeft: 3
  },
  rect9: {
    top: 0,
    left: 27,
    width: 158,
    height: 66,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  ellipse2: {
    top: 34,
    left: 0,
    width: 40,
    height: 42,
    position: "absolute"
  },
  image13: {
    top: 30,
    left: 1,
    width: 37,
    height: 50,
    position: "absolute"
  },
  rect9Stack: {
    width: 185,
    height: 80,
    marginTop: 9,
    marginLeft: 14
  },
  rect10: {
    top: 0,
    left: 40,
    width: 158,
    height: 83,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  ellipse4: {
    top: 45,
    left: 14,
    width: 40,
    height: 42,
    position: "absolute"
  },
  image12: {
    top: 48,
    left: 0,
    width: 68,
    height: 34,
    position: "absolute"
  },
  rect10Stack: {
    width: 198,
    height: 87,
    marginTop: 6,
    marginLeft: 1
  },
  rect11: {
    top: 0,
    left: 0,
    width: 158,
    height: 92,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  ellipse3: {
    top: 58,
    left: 136,
    width: 40,
    height: 42,
    position: "absolute"
  },
  image10: {
    top: 58,
    left: 139,
    width: 35,
    height: 42,
    position: "absolute"
  },
  rect11Stack: {
    width: 176,
    height: 100,
    marginTop: 19,
    marginLeft: 162
  },
  rect12: {
    top: 0,
    left: 26,
    width: 158,
    height: 66,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  ellipse5: {
    top: 37,
    left: 0,
    width: 40,
    height: 42,
    position: "absolute"
  },
  image14: {
    top: 33,
    left: 4,
    width: 37,
    height: 50,
    position: "absolute"
  },
  rect12Stack: {
    width: 184,
    height: 83,
    marginTop: 10,
    marginLeft: 15
  },
  materialFixedLabelTextbox1: {
    height: 43,
    width: 284,
    backgroundColor: "#ffffff"
  },
  materialButtonHamburger6: {
    height: 36,
    width: 36,
    backgroundColor: "rgba(221,110,66,1)",
    marginLeft: 11
  },
  materialFixedLabelTextbox1Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 8,
    marginRight: 11
  },
  materialBasicFooter: {
    height: 56,
    width: 353,
    position: "absolute",
    left: 1,
    top: 702,
    backgroundColor: "rgba(79,109,122,1)"
  },
  rect1Stack: {
    width: 356,
    height: 758,
    marginTop: 33,
    marginLeft: 10
  }
});

export default ChatScreen2;
