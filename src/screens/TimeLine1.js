import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import MaterialSlider2 from "../components/MaterialSlider";
import MaterialBasicFooter2 from "../components/MaterialBasicFooter";
import MaterialHeader18 from "../components/MaterialHeader";

function TimeLine1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollAreaStack}>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <Text style={styles.text}></Text>
          </ScrollView>
        </View>
        <MaterialSlider2 style={styles.materialSlider2}></MaterialSlider2>
        <MaterialBasicFooter2
          style={styles.materialBasicFooter2}
        ></MaterialBasicFooter2>
      </View>
      <MaterialHeader18 style={styles.materialHeader18}></MaterialHeader18>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    borderColor: "#000000"
  },
  scrollArea: {
    top: 0,
    left: 276,
    width: 354,
    height: 658,
    position: "absolute",
    backgroundColor: "rgba(234,234,234,1)"
  },
  scrollArea_contentContainerStyle: {
    height: 658,
    width: 354
  },
  text: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 17,
    marginTop: 10,
    marginLeft: 138
  },
  materialSlider2: {
    position: "absolute",
    height: 30,
    width: 585,
    left: 0,
    transform: [
      {
        rotate: "-90.09deg"
      }
    ],
    top: 304
  },
  materialBasicFooter2: {
    height: 56,
    width: 356,
    position: "absolute",
    left: 275,
    top: 649,
    backgroundColor: "rgba(79,109,122,1)"
  },
  scrollAreaStack: {
    width: 631,
    height: 705,
    marginTop: 87,
    marginLeft: -266
  },
  materialHeader18: {
    height: 56,
    width: 353,
    backgroundColor: "rgba(79,109,122,1)",
    marginTop: -761,
    marginLeft: 10
  }
});

export default TimeLine1;
