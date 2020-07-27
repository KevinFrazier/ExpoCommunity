import React, { Component, useState, useContext } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialUnderlineTextbox1 from "../components/MaterialUnderlineTextbox";
import MaterialRightIconTextbox from "../components/MaterialRightIconTextbox";
import MaterialButtonDanger1 from "../components/MaterialButtonDanger";

import {createAccount} from '../actions/firebase'
import {UserContext} from '../states/'
import * as constants from '../constants'

function SignUp(props) {


  let [user, setUser ]= useContext(UserContext)
  let abort = new AbortController()
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  
  return (
    
    <View style={styles.container}>
      <View style={styles.ellipse1Stack}>
        <Svg viewBox="0 0 219 152" style={styles.ellipse1}>
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
        <Text style={styles.logo1}>LOGO</Text>
      </View>
      <View style={styles.rect1}>

        <MaterialUnderlineTextbox
          style={styles.materialUnderlineTextbox}
          placeholder = {"UserName"}
          onChangeText = {(text) => setUsername(text)}
        />
        
        <MaterialUnderlineTextbox
          style={styles.materialUnderlineTextbox1}
          placeholder={"Password"}
          onChangeText = {(text) => {setPassword(text)}}
        />

        <MaterialButtonDanger1
          style={styles.materialButtonDanger1}
          text = "Sign Up"
          onPress = {() => {
                
            createAccount((status, result) => {
              
              if(status == "success"){
                setUser(result)
                abort.abort()
                props.navigation.navigate(constants.APP_PATH)
              }
          }, username, password)}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(234,234,234,1)"
  },
  ellipse1: {
    top: 0,
    left: 0,
    width: 219,
    height: 152,
    position: "absolute"
  },
  logo1: {
    top: 47,
    left: 48,
    position: "absolute",
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 50
  },
  ellipse1Stack: {
    width: 219,
    height: 152,
    marginTop: 181,
    marginLeft: 76
  },
  rect1: {
    width: 294,
    height: 261,
    backgroundColor: "rgba(79,109,122,1)",
    marginTop: 21,
    marginLeft: 41
  },
  materialUnderlineTextbox: {
    height: 43,
    width: 224,
    backgroundColor: "#fff",
    marginTop: 33,
    marginLeft: 29
  },
  materialUnderlineTextbox1: {
    height: 43,
    width: 227,
    backgroundColor: "#fff",
    marginTop: 20,
    marginLeft: 27
  },
  materialRightIconTextbox: {
    height: 43,
    width: 227,
    backgroundColor: "#fff",
    marginTop: 15,
    marginLeft: 27
  },
  materialButtonDanger1: {
    height: 36,
    width: 100,
    backgroundColor: "rgba(221,110,66,1)",
    marginTop: 14,
    marginLeft: 97
  }
});

export default SignUp;
