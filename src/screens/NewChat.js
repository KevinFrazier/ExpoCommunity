import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonPrimary1 from "../components/MaterialButtonPrimary";
import Svg, { Ellipse } from "react-native-svg";
import MaterialButtonShare2 from "../components/MaterialButtonShare";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialButtonPrimary3 from "../components/MaterialButtonPrimary";

function NewChat(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <Text style={styles.loremIpsum1}></Text>
        <Text style={styles.loremIpsum2}></Text>
        <View style={styles.back1StackStack}>
          <View style={styles.back1Stack}>
            <Text style={styles.back1}></Text>
            <MaterialButtonPrimary1
              style={styles.materialButtonPrimary1}
            ></MaterialButtonPrimary1>
          </View>
          <Text style={styles.back2}></Text>
        </View>
        <View style={styles.rect3}>
          <Text style={styles.chatName}>Chat Name</Text>
        </View>
        <Text style={styles.friends}>Friends</Text>
        <View style={styles.ellipse6StackRow}>
          <View style={styles.ellipse6Stack}>
            <Svg viewBox="0 0 51.43 51.89" style={styles.ellipse6}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={26}
                cy={26}
                rx={26}
                ry={26}
              ></Ellipse>
            </Svg>
            <MaterialButtonShare2
              style={styles.materialButtonShare2}
            ></MaterialButtonShare2>
          </View>
          <Svg viewBox="0 0 51.43 51.89" style={styles.ellipse5}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(230, 230, 230,1)"
              cx={26}
              cy={26}
              rx={26}
              ry={26}
            ></Ellipse>
          </Svg>
          <Svg viewBox="0 0 51.43 51.89" style={styles.ellipse4}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(230, 230, 230,1)"
              cx={26}
              cy={26}
              rx={26}
              ry={26}
            ></Ellipse>
          </Svg>
          <Svg viewBox="0 0 51.43 51.89" style={styles.ellipse2}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(230, 230, 230,1)"
              cx={26}
              cy={26}
              rx={26}
              ry={26}
            ></Ellipse>
          </Svg>
          <Svg viewBox="0 0 51.43 51.89" style={styles.ellipse3}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(230, 230, 230,1)"
              cx={26}
              cy={26}
              rx={26}
              ry={26}
            ></Ellipse>
          </Svg>
        </View>
        <View style={styles.name1Row}>
          <Text style={styles.name1}>name1</Text>
          <Text style={styles.name14}>name1</Text>
          <Text style={styles.name13}>name1</Text>
          <Text style={styles.name12}>name1</Text>
        </View>
        <View style={styles.rect4}>
          <Text style={styles.backgroundSettings}>Background Settings</Text>
          <View style={styles.rect7}>
            <Text style={styles.chatThemes1}></Text>
            <View style={styles.icon2Row}>
              <FontAwesomeIcon
                name="check-circle"
                style={styles.icon2}
              ></FontAwesomeIcon>
              <Text style={styles.collage}>Collage</Text>
            </View>
            <View style={styles.rect8Row}>
              <View style={styles.rect8}></View>
              <EntypoIcon name="brush" style={styles.icon3}></EntypoIcon>
              <Text style={styles.changeBackground}>
                Change {"\n"}Background
              </Text>
            </View>
            <View style={styles.icon4Row}>
              <FontAwesomeIcon
                name="check-circle"
                style={styles.icon4}
              ></FontAwesomeIcon>
              <Text style={styles.slideshow}>Slideshow</Text>
            </View>
            <View style={styles.rect9}>
              <View style={styles.ellipse7StackRow}>
                <View style={styles.ellipse7Stack}>
                  <Svg viewBox="0 0 20.22 18.88" style={styles.ellipse7}>
                    <Ellipse
                      stroke="rgba(230, 230, 230,1)"
                      strokeWidth={0}
                      fill="rgba(255,255,255,1)"
                      cx={10}
                      cy={9}
                      rx={10}
                      ry={9}
                    ></Ellipse>
                  </Svg>
                  <EntypoIcon
                    name="circle-with-plus"
                    style={styles.icon5}
                  ></EntypoIcon>
                </View>
                <View style={styles.rect10}></View>
                <View style={styles.rect11}></View>
                <View style={styles.rect12}></View>
                <View style={styles.rect14}></View>
              </View>
              <View style={styles.rect13Row}>
                <View style={styles.rect13}></View>
                <View style={styles.rect15}></View>
                <View style={styles.rect16}></View>
                <View style={styles.rect17}></View>
                <View style={styles.rect18}></View>
              </View>
            </View>
          </View>
        </View>
        <MaterialButtonPrimary3
          style={styles.materialButtonPrimary3}
        ></MaterialButtonPrimary3>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  rect1: {
    width: 349,
    height: 752,
    backgroundColor: "rgba(79,109,122,1)",
    alignSelf: "center"
  },
  loremIpsum1: {
    fontFamily: "Roboto",
    color: "rgba(74,144,226,1)",
    fontSize: 40,
    marginTop: 16,
    marginLeft: 14
  },
  loremIpsum2: {
    fontFamily: "Roboto",
    color: "rgba(74,144,226,1)",
    fontSize: 40,
    marginLeft: 21
  },
  back1: {
    top: 4,
    left: 16,
    position: "absolute",
    fontFamily: "Roboto",
    color: "rgba(74,144,226,1)",
    fontSize: 17
  },
  materialButtonPrimary1: {
    height: 36,
    width: 100,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(192,214,223,1)"
  },
  back1Stack: {
    top: 0,
    left: 0,
    width: 100,
    height: 36,
    position: "absolute"
  },
  back2: {
    top: 4,
    left: 22,
    position: "absolute",
    fontFamily: "Roboto",
    color: "rgba(74,144,226,1)",
    fontSize: 17
  },
  back1StackStack: {
    width: 100,
    height: 36,
    marginTop: 10,
    marginLeft: 25
  },
  rect3: {
    width: 303,
    height: 45,
    backgroundColor: "rgba(234,234,234,1)",
    marginTop: 13,
    marginLeft: 24
  },
  chatName: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 17
  },
  friends: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 20,
    marginTop: 21,
    marginLeft: 43
  },
  ellipse6: {
    top: 0,
    left: 0,
    width: 51,
    height: 52,
    position: "absolute"
  },
  materialButtonShare2: {
    height: 38,
    width: 41,
    position: "absolute",
    left: 5,
    top: 6,
    backgroundColor: "rgba(221,110,66,1)"
  },
  ellipse6Stack: {
    width: 51,
    height: 52
  },
  ellipse5: {
    width: 51,
    height: 52,
    marginLeft: 8
  },
  ellipse4: {
    width: 51,
    height: 52,
    marginLeft: 8
  },
  ellipse2: {
    width: 51,
    height: 52,
    marginLeft: 9
  },
  ellipse3: {
    width: 51,
    height: 52,
    marginLeft: 7
  },
  ellipse6StackRow: {
    height: 52,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 31,
    marginRight: 31
  },
  name1: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 12
  },
  name14: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 12,
    marginLeft: 24
  },
  name13: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 12,
    marginLeft: 21
  },
  name12: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 12,
    marginLeft: 24
  },
  name1Row: {
    height: 14,
    flexDirection: "row",
    marginLeft: 97,
    marginRight: 36
  },
  rect4: {
    width: 303,
    height: 443,
    backgroundColor: "rgba(234,234,234,1)",
    marginTop: 13,
    marginLeft: 21
  },
  backgroundSettings: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 20,
    marginTop: 8,
    marginLeft: 10
  },
  rect7: {
    width: 278,
    height: 382,
    backgroundColor: "rgba(192,214,223,1)",
    marginTop: 6,
    marginLeft: 12
  },
  chatThemes1: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 20,
    marginLeft: 7
  },
  icon2: {
    color: "rgba(221,110,66,1)",
    fontSize: 19,
    height: 19,
    width: 16,
    marginTop: 1
  },
  collage: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 17,
    marginLeft: 14
  },
  icon2Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 14,
    marginRight: 177
  },
  rect8: {
    width: 66,
    height: 91,
    backgroundColor: "rgba(255,255,255,1)"
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 19,
    height: 22,
    width: 19,
    marginLeft: 29,
    marginTop: 33
  },
  changeBackground: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 17,
    marginLeft: 12,
    marginTop: 24
  },
  rect8Row: {
    height: 91,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 42,
    marginRight: 20
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 19,
    height: 19,
    width: 16,
    marginTop: 1
  },
  slideshow: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 17,
    marginLeft: 12
  },
  icon4Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 14,
    marginRight: 158
  },
  rect9: {
    width: 254,
    height: 191,
    backgroundColor: "rgba(232,218,178,1)",
    marginTop: 7,
    marginLeft: 15
  },
  ellipse7: {
    top: 3,
    left: 0,
    width: 20,
    height: 19,
    position: "absolute"
  },
  icon5: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(221,110,66,1)",
    fontSize: 20,
    height: 23,
    width: 20
  },
  ellipse7Stack: {
    width: 20,
    height: 23,
    marginTop: 21
  },
  rect10: {
    width: 43,
    height: 71,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 20
  },
  rect11: {
    width: 43,
    height: 71,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 4
  },
  rect12: {
    width: 43,
    height: 71,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 2
  },
  rect14: {
    width: 43,
    height: 71,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 5
  },
  ellipse7StackRow: {
    height: 71,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 19,
    marginRight: 12
  },
  rect13: {
    width: 43,
    height: 71,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect15: {
    width: 43,
    height: 71,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 3
  },
  rect16: {
    width: 43,
    height: 71,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 5
  },
  rect17: {
    width: 43,
    height: 71,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 4
  },
  rect18: {
    width: 43,
    height: 71,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 4
  },
  rect13Row: {
    height: 71,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 11,
    marginRight: 12
  },
  materialButtonPrimary3: {
    height: 36,
    width: 100,
    backgroundColor: "rgba(221,110,66,1)",
    marginTop: 7,
    marginLeft: 129
  }
});

export default NewChat;
