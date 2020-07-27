import React, { Component } from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import MaterialHeader12 from "../components/MaterialHeader";
import MaterialButtonShare2 from "../components/MaterialButtonShare";

function EditWallpaperClicked(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.rect3Stack}>
          <View style={styles.rect3}>
            <View style={styles.image1Stack}>
              
            </View>
            
          </View>
          <MaterialHeader12 style={styles.materialHeader12}></MaterialHeader12>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.imageRow}>
              
              <MaterialButtonShare2
                style={styles.materialButtonShare1}
              ></MaterialButtonShare2>
            </View>
          </ScrollView>
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
    height: 758,
    backgroundColor: "rgba(234,234,234,1)",
    marginTop: 46,
    marginLeft: 13
  },
  rect3: {
    top: 50,
    left: 0,
    width: 349,
    height: 575,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  image1: {
    top: 0,
    left: 0,
    width: 256,
    height: 174,
    position: "absolute"
  },
  image2: {
    top: 154,
    left: 0,
    width: 179,
    height: 134,
    position: "absolute"
  },
  image1Stack: {
    width: 256,
    height: 288
  },
  image4: {
    width: 286,
    height: 163,
    borderWidth: 5,
    borderColor: "#000000",
    borderStyle: "dashed",
    marginTop: 50,
    marginLeft: 22
  },
  materialHeader12: {
    height: 56,
    width: 349,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(79,109,122,1)"
  },
  rect3Stack: {
    width: 349,
    height: 625
  },
  scrollArea: {
    width: 349,
    height: 113,
    backgroundColor: "rgba(192,214,223,1)",
    marginTop: 4
  },
  scrollArea_contentContainerStyle: {
    width: 349,
    height: 113,
    flexDirection: "row"
  },
  image: {
    width: 84,
    height: 59
  },
  image3: {
    width: 78,
    height: 59,
    marginLeft: 11
  },
  image5: {
    width: 93,
    height: 59,
    borderWidth: 2,
    borderColor: "#000000",
    borderStyle: "dashed",
    marginLeft: 14
  },
  materialButtonShare1: {
    height: 22,
    width: 21,
    backgroundColor: "rgba(221,110,66,1)",
    marginLeft: 11,
    marginTop: 8
  },
  imageRow: {
    height: 59,
    flexDirection: "row",
    flex: 1,
    marginRight: 31,
    marginLeft: 6,
    marginTop: 26
  }
});

export default EditWallpaperClicked;
