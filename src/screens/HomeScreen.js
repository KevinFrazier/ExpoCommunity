import React, { Component, useState, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import MaterialUnderlineTextbox2 from "../components/MaterialUnderlineTextbox";
import MaterialRightIconTextbox1 from "../components/MaterialRightIconTextbox";
import MaterialButtonDanger from "../components/MaterialButtonDanger";
import Svg, { Ellipse } from "react-native-svg";

import {loginByPassword} from '../actions/firebase'
import { UserContext } from "../states";
import * as constants from '../constants'

function HomeScreen({navigation, route, props}) {
  
  let abort = new AbortController()
  let [user, setUser] = useContext(UserContext)
  let [username, setUserName]= useState('')
  let [password, setPassword]= useState('')

  function goToSignUp(){
    console.log("Going to Sign Up")
    navigation.navigate('SignUp')
  }
  
  console.log({username, password})
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <MaterialUnderlineTextbox2
          style={styles.materialUnderlineTextbox2}
          placeholder = "UserName"
          onChangeText = {(text) => setUserName(text)}
        />
        <MaterialUnderlineTextbox2
          style={styles.materialRightIconTextbox1}
          placeholder = "Password"
          onChangeText = {(text) => setPassword(text)}
        />

        <MaterialButtonDanger
          style={styles.materialButtonDanger}
          onPress = {() => loginByPassword((status, result) => {
            if(status == "success"){
              setUser(result)
              abort.abort()
              navigation.navigate(constants.APP_PATH)
            }
          }, username, password) }
          text = {"Login"}
        />

      </View>
      <TouchableOpacity onPress={goToSignUp}>
        <Text style={styles.newUserSignUp}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 219 152" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(192,214,223,1)"
            cx={110}
            cy={76}
            rx={110}
            ry={76}
          ></Ellipse>
        </Svg>
        <Text style={styles.logo}>LOGO</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(234,234,234,1)"
  },
  rect: {
    width: 294,
    height: 246,
    backgroundColor: "rgba(79,109,122,1)",
    marginTop: 358,
    marginLeft: 41
  },
  materialUnderlineTextbox2: {
    height: 43,
    width: 230,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 37,
    marginLeft: 33
  },
  materialRightIconTextbox1: {
    height: 43,
    width: 226,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 25,
    marginLeft: 37
  },
  materialButtonDanger: {
    height: 36,
    width: 100,
    backgroundColor: "rgba(221,110,66,1)",
    marginTop: 35,
    marginLeft: 95
  },
  newUserSignUp: {
    fontFamily: "Roboto",
    color: "rgba(74,144,226,1)",
    fontSize: 17,
    marginTop: 9,
    marginLeft: 120
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 219,
    height: 152,
    position: "absolute"
  },
  logo: {
    top: 47,
    left: 48,
    position: "absolute",
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 50
  },
  ellipseStack: {
    width: 219,
    height: 152,
    marginTop: -452,
    marginLeft: 76
  }
});

export default HomeScreen;
