import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import MaterialHeader2 from "../components/MaterialHeader";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Svg, { Ellipse } from "react-native-svg";
import MaterialFixedLabelTextbox2 from "../components/MaterialFixedLabelTextbox";
import MaterialButtonHamburger5 from "../components/MaterialButtonHamburger";
import Footer from '../components/MaterialBasicFooter'

function ChatScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <MaterialHeader2 style={styles.materialHeader1}></MaterialHeader2>
          <View style={styles.rect3StackStack}>
            <View style={styles.rect3Stack}>
              <View style={styles.rect3}>
                <View style={styles.rect4Row}>
                  <View style={styles.rect4}>
                    <View style={styles.wallpaperRow}>
                      <Text style={styles.wallpaper}>Wallpaper</Text>
                      <EntypoIcon
                        name="brush"
                        style={styles.icon3}
                      ></EntypoIcon>
                    </View>
                  </View>
                  <View style={styles.rect5}>
                    <View style={styles.timelineStackRow}>
                      <View style={styles.timelineStack}>
                        <Text style={styles.timeline}>Timeline</Text>
                        <Text style={styles.timeline1}>Timeline</Text>
                      </View>
                      <EntypoIcon
                        name="clock"
                        style={styles.icon4}
                      ></EntypoIcon>
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
              <ImageBackground
                
                resizeMode="contain"
                style={styles.image1}
                imageStyle={styles.image1_imageStyle}
              >
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
              </ImageBackground>
              <ImageBackground
                
                resizeMode="contain"
                style={styles.image2}
                imageStyle={styles.image2_imageStyle}
              >
                <View style={styles.ellipse2Stack}>
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
              </ImageBackground>
              
              <View style={styles.rect8}></View>
              <View style={styles.rect9}></View>
              <View style={styles.rect10}></View>
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
            <View style={styles.image3Stack}>
              <ImageBackground
                
                resizeMode="contain"
                style={styles.image3}
                imageStyle={styles.image3_imageStyle}
              >
                <View style={styles.rect12}></View>
                <View style={styles.materialFixedLabelTextbox1Row}>
                  <MaterialFixedLabelTextbox2
                    style={styles.materialFixedLabelTextbox1}
                  ></MaterialFixedLabelTextbox2>
                  <MaterialButtonHamburger5
                    style={styles.materialButtonHamburger5}
                  ></MaterialButtonHamburger5>
                </View>
              </ImageBackground>
              <ImageBackground
                
                resizeMode="contain"
                style={styles.image6}
                imageStyle={styles.image6_imageStyle}
              >
                <View style={styles.ellipse5Stack}>
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
              </ImageBackground>
              <ImageBackground
                
                resizeMode="contain"
                style={styles.image8}
                imageStyle={styles.image8_imageStyle}
              >
                <View style={styles.ellipse4Stack}>
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
                  <Image

                    resizeMode="contain"
                    style={styles.image12}
                  ></Image>
                </View>
              </ImageBackground>
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
              <Footer/>
            </View>
          </View>
        </View>
        
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
    height: 48,
    width: 356,
    backgroundColor: "rgba(79,109,122,1)"
  },
  rect3: {
    top: 0,
    left: 0,
    width: 356,
    height: 45,
    position: "absolute",
    backgroundColor: "rgba(192,214,223,1)",
    borderWidth: 1,
    borderColor: "#000000",
    flexDirection: "row"
  },
  rect4: {
    width: 114,
    height: 27,
    backgroundColor: "rgba(234,234,234,1)",
    flexDirection: "row"
  },
  wallpaper: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 17,
    marginTop: 2
  },
  icon3: {
    color: "rgba(221,110,66,1)",
    fontSize: 19,
    height: 22,
    width: 19,
    marginLeft: 5
  },
  wallpaperRow: {
    height: 22,
    flexDirection: "row",
    flex: 1,
    marginRight: 7,
    marginLeft: 8,
    marginTop: 2
  },
  rect5: {
    width: 103,
    height: 27,
    backgroundColor: "rgba(234,234,234,1)",
    flexDirection: "row",
    marginLeft: 8
  },
  timeline: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 17
  },
  timeline1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 17
  },
  timelineStack: {
    width: 64,
    height: 20,
    marginTop: 2
  },
  icon4: {
    color: "rgba(221,110,66,1)",
    fontSize: 19,
    height: 22,
    width: 19,
    marginLeft: 8
  },
  timelineStackRow: {
    height: 22,
    flexDirection: "row",
    flex: 1,
    marginRight: 5,
    marginLeft: 7,
    marginTop: 2
  },
  rect6: {
    width: 103,
    height: 27,
    backgroundColor: "rgba(234,234,234,1)",
    flexDirection: "row",
    marginLeft: 9
  },
  settings: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 17,
    marginTop: 4
  },
  icon5: {
    color: "rgba(221,110,66,1)",
    fontSize: 22,
    height: 24,
    width: 16,
    marginLeft: 9
  },
  settingsRow: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 6,
    marginTop: 2
  },
  rect4Row: {
    height: 27,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 9,
    marginTop: 8
  },
  image1: {
    top: 41,
    left: 104,
    width: 251,
    height: 174,
    position: "absolute"
  },
  image1_imageStyle: {},
  rect7: {
    top: 0,
    left: 0,
    width: 158,
    height: 66,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  ellipse: {
    top: 33,
    left: 151,
    width: 40,
    height: 42,
    position: "absolute"
  },
  image9: {
    top: 33,
    left: 153,
    width: 35,
    height: 42,
    position: "absolute"
  },
  rect7Stack: {
    width: 191,
    height: 75,
    marginTop: 22,
    marginLeft: 49
  },
  image7: {
    top: 45,
    left: 0,
    width: 144,
    height: 170,
    position: "absolute"
  },
  image2: {
    top: 211,
    left: 0,
    width: 183,
    height: 139,
    position: "absolute"
  },
  image2_imageStyle: {},
  ellipse2: {
    top: 3,
    left: 0,
    width: 40,
    height: 42,
    position: "absolute"
  },
  image13: {
    top: 0,
    left: 2,
    width: 37,
    height: 50,
    position: "absolute"
  },
  ellipse2Stack: {
    width: 40,
    height: 50,
    marginTop: 54,
    marginLeft: 17
  },
  image4: {
    top: 211,
    left: 174,
    width: 180,
    height: 138,
    position: "absolute"
  },
  rect8: {
    top: 155,
    left: 42,
    width: 158,
    height: 66,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect9: {
    top: 235,
    left: 44,
    width: 158,
    height: 66,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect10: {
    top: 317,
    left: 43,
    width: 158,
    height: 83,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  ellipse1: {
    top: 188,
    left: 17,
    width: 40,
    height: 42,
    position: "absolute"
  },
  image11: {
    top: 192,
    left: 3,
    width: 68,
    height: 34,
    position: "absolute"
  },
  rect3Stack: {
    top: 0,
    left: 0,
    width: 356,
    height: 400,
    position: "absolute"
  },
  image3: {
    top: 218,
    left: 0,
    width: 354,
    height: 200,
    position: "absolute"
  },
  image3_imageStyle: {},
  rect12: {
    width: 158,
    height: 66,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 25,
    marginLeft: 43
  },
  materialFixedLabelTextbox1: {
    height: 43,
    width: 284,
    backgroundColor: "#ffffff"
  },
  materialButtonHamburger5: {
    height: 36,
    width: 36,
    backgroundColor: "rgba(221,110,66,1)",
    marginLeft: 10,
    marginTop: 7
  },
  materialFixedLabelTextbox1Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 52,
    marginLeft: 10,
    marginRight: 14
  },
  image6: {
    top: 130,
    left: 0,
    width: 200,
    height: 200,
    position: "absolute"
  },
  image6_imageStyle: {},
  ellipse5: {
    top: 3,
    left: 0,
    width: 40,
    height: 42,
    position: "absolute"
  },
  image14: {
    top: 0,
    left: 2,
    width: 37,
    height: 50,
    position: "absolute"
  },
  ellipse5Stack: {
    width: 40,
    height: 50,
    marginTop: 142,
    marginLeft: 17
  },
  image8: {
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    position: "absolute"
  },
  image8_imageStyle: {},
  ellipse4: {
    top: 0,
    left: 15,
    width: 40,
    height: 42,
    position: "absolute"
  },
  image12: {
    top: 2,
    left: 0,
    width: 68,
    height: 34,
    position: "absolute"
  },
  ellipse4Stack: {
    width: 68,
    height: 42,
    marginTop: 79,
    marginLeft: 2
  },
  rect11: {
    top: 130,
    left: 161,
    width: 158,
    height: 92,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  ellipse3: {
    top: 186,
    left: 300,
    width: 40,
    height: 42,
    position: "absolute"
  },
  image10: {
    top: 186,
    left: 303,
    width: 35,
    height: 42,
    position: "absolute"
  },
  image3Stack: {
    top: 288,
    left: 0,
    width: 354,
    height: 418,
    position: "absolute"
  },
  rect3StackStack: {
    width: 356,
    height: 706
  },
  image5: {
    top: 391,
    left: 104,
    width: 255,
    height: 166,
    position: "absolute"
  },
  rect1Stack: {
    width: 359,
    height: 755,
    marginTop: 37,
    marginLeft: 10
  }
});

export default ChatScreen;
