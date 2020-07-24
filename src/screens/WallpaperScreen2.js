import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import MaterialButtonPrimary6 from "../components/MaterialButtonPrimary";
import MaterialButtonShare1 from "../components/MaterialButtonShare";
import MaterialHeader1 from "../components/MaterialHeader";

function WallpaperScreen2(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.timeline1}></Text>
      <View style={styles.rect7StackRow}>
        <View style={styles.rect7Stack}>
          <View style={styles.rect7}>
            <View style={styles.image1Stack}>
              
              <MaterialButtonPrimary6
                style={styles.materialButtonPrimary6}
              ></MaterialButtonPrimary6>
            </View>
          </View>
          <ImageBackground
            
            resizeMode="contain"
            style={styles.image3}
            imageStyle={styles.image3_imageStyle}
          >
          </ImageBackground>
        </View>
        <View style={styles.rect8}></View>
        <View style={styles.rect9}></View>
      </View>
      <View style={styles.rect10}>
        <MaterialButtonShare1
          style={styles.materialButtonShare1}
        ></MaterialButtonShare1>
      </View>
      <MaterialHeader1 style={styles.materialHeader1}></MaterialHeader1>
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
  timeline1: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 17,
    marginTop: 97,
    marginLeft: 148
  },
  rect7: {
    top: 18,
    left: 0,
    width: 96,
    height: 165,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#000000"
  },
  image1: {
    top: 88,
    left: 0,
    width: 94,
    height: 59,
    position: "absolute"
  },
  image6: {
    top: 0,
    left: 15,
    width: 80,
    height: 106,
    position: "absolute"
  },
  image2: {
    top: 44,
    left: 1,
    width: 57,
    height: 53,
    position: "absolute"
  },
  image4: {
    top: 25,
    left: 0,
    width: 49,
    height: 42,
    position: "absolute"
  },
  materialButtonPrimary6: {
    height: 27,
    width: 86,
    position: "absolute",
    left: 1,
    top: 53,
    backgroundColor: "rgba(221,110,66,1)"
  },
  image1Stack: {
    width: 95,
    height: 147,
    marginTop: 18,
    marginLeft: 1
  },
  image3: {
    top: 0,
    left: 2,
    width: 94,
    height: 103,
    position: "absolute"
  },
  image3_imageStyle: {},
  image5: {
    width: 37,
    height: 48,
    marginTop: 20
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
    marginLeft: 21,
    marginTop: 18
  },
  rect9: {
    width: 96,
    height: 165,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#000000",
    marginLeft: 24,
    marginTop: 18
  },
  rect7StackRow: {
    height: 183,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 20,
    marginRight: 22
  },
  rect10: {
    width: 96,
    height: 165,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#000000",
    marginTop: 28,
    marginLeft: 20
  },
  materialButtonShare1: {
    height: 44,
    width: 50,
    backgroundColor: "rgba(221,110,66,1)",
    marginTop: 60,
    marginLeft: 25
  },
  materialHeader1: {
    height: 48,
    width: 356,
    backgroundColor: "rgba(79,109,122,1)",
    marginTop: -438,
    alignSelf: "center"
  }
});

export default WallpaperScreen2;
