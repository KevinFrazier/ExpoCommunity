import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import MaterialButtonPrimary6 from "../components/MaterialButtonPrimary";
import MaterialButtonShare2 from "../components/MaterialButtonShare";
import MaterialHeader16 from "../components/MaterialHeader";
import MaterialBasicFooter3 from "../components/MaterialBasicFooter";

function WallpaperScreen3(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect7StackRow}>
        <View style={styles.rect7Stack}>
          <View style={styles.rect7}>
            <View style={styles.image5Stack}>
              {/* <Image
                source={require("../assets/images/_MG_6484.JPG")}
                resizeMode="cover"
                style={styles.image5}
              ></Image> */}
              
            </View>
          </View>
          
          <ImageBackground
            
            resizeMode="contain"
            style={styles.image3}
            imageStyle={styles.image3_imageStyle}
          >
            <View style={styles.image4Stack}>
              
              <MaterialButtonPrimary6
                style={styles.materialButtonPrimary1}
              ></MaterialButtonPrimary6>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.timeline1Column}>
          <Text style={styles.timeline1}></Text>
          <View style={styles.rect8}></View>
        </View>
        <View style={styles.rect9}></View>
      </View>
      <View style={styles.rect10}>
        <MaterialButtonShare2
          style={styles.materialButtonShare1}
        ></MaterialButtonShare2>
      </View>
      <MaterialHeader16 style={styles.materialHeader16}></MaterialHeader16>
      <MaterialBasicFooter3
        style={styles.materialBasicFooter3}
      ></MaterialBasicFooter3>
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
  rect7: {
    top: 21,
    left: 0,
    width: 96,
    height: 165,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#000000"
  },
  image5: {
    top: 0,
    left: 0,
    width: 37,
    height: 48,
    position: "absolute"
  },
  image6: {
    top: 35,
    left: 15,
    width: 80,
    height: 106,
    position: "absolute"
  },
  image2: {
    top: 73,
    left: 0,
    width: 57,
    height: 53,
    position: "absolute"
  },
  image5Stack: {
    width: 95,
    height: 141,
    marginLeft: 1
  },
  image1: {
    top: 128,
    left: 1,
    width: 94,
    height: 59,
    position: "absolute"
  },
  image3: {
    top: 0,
    left: 2,
    width: 94,
    height: 109,
    position: "absolute"
  },
  image3_imageStyle: {},
  image4: {
    top: 0,
    left: 0,
    width: 49,
    height: 42,
    position: "absolute"
  },
  materialButtonPrimary1: {
    height: 27,
    width: 86,
    position: "absolute",
    left: 2,
    top: 13
  },
  image4Stack: {
    width: 88,
    height: 42,
    marginTop: 67
  },
  rect7Stack: {
    width: 96,
    height: 187
  },
  timeline1: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 17,
    marginLeft: 9
  },
  rect8: {
    width: 96,
    height: 165,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#000000",
    marginTop: 3
  },
  timeline1Column: {
    width: 96,
    marginLeft: 23,
    marginTop: 18,
    marginBottom: 1
  },
  rect9: {
    width: 96,
    height: 165,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#000000",
    marginLeft: 17,
    marginTop: 21
  },
  rect7StackRow: {
    height: 187,
    flexDirection: "row",
    marginTop: 79,
    marginLeft: 20,
    marginRight: 27
  },
  rect10: {
    width: 96,
    height: 165,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#000000",
    marginTop: 31,
    marginLeft: 20
  },
  materialButtonShare1: {
    height: 38,
    width: 41,
    backgroundColor: "rgba(221,110,66,1)",
    marginTop: 63,
    marginLeft: 26
  },
  materialHeader16: {
    height: 56,
    width: 356,
    backgroundColor: "rgba(79,109,122,1)",
    marginTop: -439,
    marginLeft: 10
  },
  materialBasicFooter3: {
    height: 56,
    width: 364,
    backgroundColor: "rgba(79,109,122,1)",
    marginTop: 650,
    marginLeft: 6
  }
});

export default WallpaperScreen3;
