import React, { Component } from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import MaterialHeader17 from "../components/MaterialHeader";
import MaterialButtonShare2 from "../components/MaterialButtonShare";

function EditWallpaperClicked1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <MaterialHeader17 style={styles.materialHeader17}></MaterialHeader17>
        <View style={styles.rect3Stack}>
          <View style={styles.rect3}>
            
          </View>
          
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
    marginTop: 35,
    marginLeft: 13
  },
  materialHeader17: {
    height: 56,
    width: 328,
    backgroundColor: "rgba(79,109,122,1)",
    marginTop: 2,
    marginLeft: 10
  },
  rect3: {
    top: 3,
    left: 0,
    width: 326,
    height: 575,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  image2: {
    width: 179,
    height: 134,
    marginTop: 154
  },
  image4: {
    width: 286,
    height: 163,
    borderWidth: 5,
    borderColor: "#000000",
    borderStyle: "dashed",
    marginTop: 50,
    marginLeft: 10
  },
  image1: {
    top: 0,
    left: 0,
    width: 256,
    height: 174,
    position: "absolute"
  },
  rect3Stack: {
    width: 326,
    height: 578,
    marginLeft: 12
  },
  scrollArea: {
    width: 326,
    height: 113,
    backgroundColor: "rgba(192,214,223,1)",
    marginTop: 4,
    marginLeft: 12
  },
  scrollArea_contentContainerStyle: {
    width: 326,
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
    marginLeft: 7,
    marginTop: 1
  },
  image5: {
    width: 93,
    height: 59,
    borderWidth: 2,
    borderColor: "#000000",
    borderStyle: "dashed",
    marginLeft: 6,
    marginTop: 1
  },
  materialButtonShare1: {
    height: 16,
    width: 19,
    backgroundColor: "rgba(221,110,66,1)",
    marginLeft: 4,
    marginTop: 14
  },
  imageRow: {
    height: 60,
    flexDirection: "row",
    flex: 1,
    marginRight: 25,
    marginLeft: 10,
    marginTop: 25
  }
});

export default EditWallpaperClicked1;
