import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import MaterialButtonPrimary2 from "../components/MaterialButtonPrimary";
import Svg, { Ellipse } from "react-native-svg";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialButtonHamburger4 from "../components/MaterialButtonHamburger";
import MaterialButtonHamburger1 from "../components/MaterialButtonHamburger";

function AddFriends(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <MaterialButtonPrimary2
          style={styles.materialButtonPrimary2}
        ></MaterialButtonPrimary2>
        <View style={styles.scrollArea1}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.scrollArea1_contentContainerStyle}
          >
            <Text style={styles.friends1}>Friends</Text>
            <View style={styles.ellipse1Row}>
              <Svg viewBox="0 0 51.43 51.89" style={styles.ellipse1}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(232,218,178,1)"
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
                  fill="rgba(232,218,178,1)"
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
                  fill="rgba(232,218,178,1)"
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
                  fill="rgba(232,218,178,1)"
                  cx={26}
                  cy={26}
                  rx={26}
                  ry={26}
                ></Ellipse>
              </Svg>
              <Svg viewBox="0 0 51.43 51.89" style={styles.ellipse5}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(232,218,178,1)"
                  cx={26}
                  cy={26}
                  rx={26}
                  ry={26}
                ></Ellipse>
              </Svg>
            </View>
            <View style={styles.name1Row}>
              <Text style={styles.name1}>name1</Text>
              <Text style={styles.name2}>name1</Text>
              <Text style={styles.name3}>name1</Text>
              <Text style={styles.name4}>name1</Text>
              <Text style={styles.name5}>name1</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.rect3}>
          <View style={styles.rect5Row}>
            <View style={styles.rect5}>
              <View style={styles.icon1Row}>
                <EntypoIcon
                  name="magnifying-glass"
                  style={styles.icon1}
                ></EntypoIcon>
                <Text style={styles.search1}>Search</Text>
              </View>
            </View>
            <View style={styles.rect13}>
              <MaterialButtonHamburger4
                style={styles.materialButtonHamburger4}
              ></MaterialButtonHamburger4>
            </View>
            <View style={styles.rect11}>
              <MaterialButtonHamburger1
                style={styles.materialButtonHamburger1}
              ></MaterialButtonHamburger1>
            </View>
          </View>
          <View style={styles.rect12}>
            <View style={styles.rect14}></View>
          </View>
        </View>
      </View>
      <EntypoIcon name="arrow-bold-right" style={styles.icon2}></EntypoIcon>
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
    marginTop: 33,
    marginLeft: 13
  },
  materialButtonPrimary2: {
    height: 36,
    width: 100,
    backgroundColor: "rgba(192,214,223,1)",
    marginTop: 21,
    marginLeft: 21
  },
  scrollArea1: {
    width: 325,
    height: 122,
    backgroundColor: "rgba(234,234,234,1)",
    marginTop: 15,
    marginLeft: 14
  },
  scrollArea1_contentContainerStyle: {
    width: 325,
    height: 122
  },
  friends1: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 20,
    marginTop: 1,
    marginLeft: 9
  },
  ellipse1: {
    width: 51,
    height: 52,
    marginTop: 1
  },
  ellipse2: {
    width: 51,
    height: 52,
    marginLeft: 10,
    marginTop: 1
  },
  ellipse3: {
    width: 51,
    height: 52,
    marginLeft: 9,
    marginTop: 1
  },
  ellipse4: {
    width: 51,
    height: 52,
    marginLeft: 14,
    marginTop: 1
  },
  ellipse5: {
    width: 51,
    height: 52,
    marginLeft: 11
  },
  ellipse1Row: {
    height: 53,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 15,
    marginRight: 11
  },
  name1: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 12,
    marginTop: 2
  },
  name2: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 12,
    marginLeft: 26,
    marginTop: 1
  },
  name3: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 12,
    marginLeft: 24,
    marginTop: 1
  },
  name4: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 12,
    marginLeft: 29
  },
  name5: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 12,
    marginLeft: 32
  },
  name1Row: {
    height: 16,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 22,
    marginRight: 12
  },
  rect3: {
    width: 325,
    height: 544,
    backgroundColor: "rgba(234,234,234,1)",
    marginTop: 7,
    marginLeft: 12
  },
  rect5: {
    width: 217,
    height: 44,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    marginTop: 3
  },
  icon1: {
    color: "rgba(128,128,128,0.52)",
    fontSize: 35,
    height: 39,
    width: 35
  },
  search1: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 20,
    marginLeft: 9,
    marginTop: 6
  },
  icon1Row: {
    height: 39,
    flexDirection: "row",
    flex: 1,
    marginRight: 99,
    marginLeft: 13,
    marginTop: 2
  },
  rect13: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 3,
    marginTop: 1
  },
  materialButtonHamburger4: {
    height: 36,
    width: 36,
    backgroundColor: "rgba(221,110,66,1)",
    marginTop: 4,
    marginLeft: 5
  },
  rect11: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 5
  },
  materialButtonHamburger1: {
    height: 36,
    width: 36,
    backgroundColor: "rgba(221,110,66,1)",
    marginTop: 3,
    marginLeft: 4
  },
  rect5Row: {
    height: 47,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 9,
    marginRight: 3
  },
  rect12: {
    width: 298,
    height: 459,
    backgroundColor: "#E6E6E6",
    marginTop: 13,
    marginLeft: 11
  },
  rect14: {
    width: 278,
    height: 45,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 15,
    marginLeft: 11
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: 79,
    marginLeft: 140
  }
});

export default AddFriends;
