import React, { Component, useContext } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import MaterialSearchBar from "../components/MaterialSearchBar";
import MaterialHeader14 from "../components/MaterialHeader";
import {UserContext} from '../states'
function ChooseChatScreen(props) {

  let [user,setUser] = useContext(UserContext)
  
  console.log("ChooseChatScreen")

  console.log("states: ", {
    user
  })
  return (
    <View style={styles.container}>
      <View style={styles.rect3Stack}>
        <View style={styles.rect3}>
          <View style={styles.ellipse2StackRow}>
            <View style={styles.ellipse2Stack}>
              <Svg viewBox="0 0 72.82 59.59" style={styles.ellipse2}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(221,110,66,1)"
                  cx={36}
                  cy={30}
                  rx={36}
                  ry={30}
                ></Ellipse>
              </Svg>
              {/* <Image
                source={require("../assets/images/Screen_Shot_2020-06-24_at_1.36.19_AM.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image> */}
            </View>
            <View style={styles.rect4}>
              <Text style={styles.chatName1}>Chat Name 1</Text>
            </View>
          </View>
          <View style={styles.ellipse7StackRow}>
            <View style={styles.ellipse7Stack}>
              <Svg viewBox="0 0 72.82 59.59" style={styles.ellipse7}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(221,110,66,1)"
                  cx={36}
                  cy={30}
                  rx={36}
                  ry={30}
                ></Ellipse>
              </Svg>
              {/* <Image
                source={require("../assets/images/Screen_Shot_2020-06-24_at_1.35.46_AM.png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image> */}
            </View>
            <View style={styles.rect5}>
              <Text style={styles.chatName2}>Chat Name 2</Text>
            </View>
          </View>
          <View style={styles.ellipse8StackRow}>
            <View style={styles.ellipse8Stack}>
              <Svg viewBox="0 0 72.82 59.59" style={styles.ellipse8}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(221,110,66,1)"
                  cx={36}
                  cy={30}
                  rx={36}
                  ry={30}
                ></Ellipse>
              </Svg>
              {/* <Image
                source={require("../assets/images/Screen_Shot_2020-06-24_at_1.34.58_AM.png")}
                resizeMode="contain"
                style={styles.image3}
              ></Image> */}
            </View>
            <View style={styles.rect6}>
              <Text style={styles.chatName3}>Chat Name 3</Text>
            </View>
          </View>
          <View style={styles.ellipse9StackRow}>
            <View style={styles.ellipse9Stack}>
              <Svg viewBox="0 0 72.82 59.59" style={styles.ellipse9}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(221,110,66,1)"
                  cx={36}
                  cy={30}
                  rx={36}
                  ry={30}
                ></Ellipse>
              </Svg>
              {/* <Image
                source={require("../assets/images/Screen_Shot_2020-06-24_at_1.33.55_AM.png")}
                resizeMode="contain"
                style={styles.image4}
              ></Image> */}
            </View>
            <View style={styles.rect7}>
              <Text style={styles.chatName4}>Chat Name 4</Text>
            </View>
          </View>
          <View style={styles.ellipse10StackRow}>
            <View style={styles.ellipse10Stack}>
              <Svg viewBox="0 0 72.82 59.59" style={styles.ellipse10}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(221,110,66,1)"
                  cx={36}
                  cy={30}
                  rx={36}
                  ry={30}
                ></Ellipse>
              </Svg>
              {/* <Image
                source={require("../assets/images/Screen_Shot_2020-06-24_at_1.33.34_AM.png")}
                resizeMode="contain"
                style={styles.image5}
              ></Image> */}
            </View>
            <View style={styles.rect8}>
              <Text style={styles.chatName5}>Chat Name 5</Text>
            </View>
          </View>
        </View>
        <MaterialSearchBar style={styles.materialSearchBar}></MaterialSearchBar>
      </View>
      <MaterialHeader14 style={styles.materialHeader14}></MaterialHeader14>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(234,234,234,1)"
  },
  rect3: {
    top: 40,
    left: 0,
    width: 361,
    height: 653,
    position: "absolute",
    backgroundColor: "rgba(79,109,122,1)"
  },
  ellipse2: {
    top: 3,
    left: 0,
    width: 73,
    height: 60,
    position: "absolute"
  },
  image: {
    top: 0,
    left: 8,
    width: 57,
    height: 63,
    position: "absolute"
  },
  ellipse2Stack: {
    width: 73,
    height: 63
  },
  rect4: {
    width: 197,
    height: 45,
    backgroundColor: "rgba(234,234,234,1)",
    marginLeft: 28,
    marginTop: 10
  },
  chatName1: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 20,
    marginTop: 11,
    marginLeft: 16
  },
  ellipse2StackRow: {
    height: 63,
    flexDirection: "row",
    marginTop: 38,
    marginLeft: 17,
    marginRight: 46
  },
  ellipse7: {
    top: 0,
    left: 0,
    width: 73,
    height: 60,
    position: "absolute"
  },
  image2: {
    top: 0,
    left: 9,
    width: 57,
    height: 66,
    position: "absolute"
  },
  ellipse7Stack: {
    width: 73,
    height: 66
  },
  rect5: {
    width: 196,
    height: 45,
    backgroundColor: "rgba(234,234,234,1)",
    transform: [
      {
        rotate: "180.00deg"
      }
    ],
    marginLeft: 29,
    marginTop: 10
  },
  chatName2: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 20,
    marginTop: 12,
    marginLeft: 14
  },
  ellipse7StackRow: {
    height: 66,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 18,
    marginRight: 45
  },
  ellipse8: {
    top: 0,
    left: 10,
    width: 73,
    height: 60,
    position: "absolute"
  },
  image3: {
    top: 3,
    left: 0,
    width: 92,
    height: 55,
    position: "absolute"
  },
  ellipse8Stack: {
    width: 92,
    height: 60
  },
  rect6: {
    width: 197,
    height: 45,
    backgroundColor: "rgba(234,234,234,1)",
    marginLeft: 24,
    marginTop: 7
  },
  chatName3: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 11
  },
  ellipse8StackRow: {
    height: 60,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 4,
    marginRight: 44
  },
  ellipse9: {
    top: 1,
    left: 0,
    width: 73,
    height: 60,
    position: "absolute"
  },
  image4: {
    top: 0,
    left: 7,
    width: 58,
    height: 61,
    position: "absolute"
  },
  ellipse9Stack: {
    width: 73,
    height: 61
  },
  rect7: {
    width: 196,
    height: 45,
    backgroundColor: "rgba(234,234,234,1)",
    marginLeft: 29,
    marginTop: 8
  },
  chatName4: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 20,
    marginTop: 11,
    marginLeft: 13
  },
  ellipse9StackRow: {
    height: 61,
    flexDirection: "row",
    marginTop: 33,
    marginLeft: 18,
    marginRight: 45
  },
  ellipse10: {
    top: 7,
    left: 0,
    width: 73,
    height: 60,
    position: "absolute"
  },
  image5: {
    top: 0,
    left: 6,
    width: 59,
    height: 75,
    position: "absolute"
  },
  ellipse10Stack: {
    width: 73,
    height: 75
  },
  rect8: {
    width: 195,
    height: 45,
    backgroundColor: "rgba(234,234,234,1)",
    marginLeft: 27,
    marginTop: 12
  },
  chatName5: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 20,
    marginTop: 11,
    marginLeft: 13
  },
  ellipse10StackRow: {
    height: 75,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 18,
    marginRight: 48
  },
  materialSearchBar: {
    height: 56,
    width: 361,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(192,214,223,1)"
  },
  rect3Stack: {
    width: 361,
    height: 694,
    marginTop: 96,
    marginLeft: 7
  },
  materialHeader14: {
    height: 56,
    width: 361,
    backgroundColor: "rgba(79,109,122,1)",
    marginTop: -750,
    marginLeft: 7
  }
});

export default ChooseChatScreen;
