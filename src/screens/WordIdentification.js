import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import CupertinoHeaderWithBackground1 from "../components/CupertinoHeaderWithBackground1";

function WordIdentification(props) {
  return (
    <View style={styles.container}>
      <CupertinoHeaderWithBackground1
        style={styles.cupertinoHeaderWithBackground1}
      ></CupertinoHeaderWithBackground1>
      <View style={styles.group}>
        <View style={styles.rect}>
          <View style={styles.imageFiller}></View>
          <Image
            source={require("../assets/images/kela1.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
      </View>
      <View style={styles.buttonStackRow}>
        <View style={styles.buttonStack}>
          <TouchableOpacity style={styles.button}></TouchableOpacity>
          <Image
            source={require("../assets/images/apple2.jpg")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </View>
        <View style={styles.button1Stack}>
          <TouchableOpacity style={styles.button1}></TouchableOpacity>
          <Image
            source={require("../assets/images/aam.jpg")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        </View>
      </View>
      <View style={styles.button2StackRow}>
        <View style={styles.button2Stack}>
          <TouchableOpacity style={styles.button2}></TouchableOpacity>
          <Image
            source={require("../assets/images/keela_image.jpg")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
        </View>
        <View style={styles.button3Stack}>
          <TouchableOpacity style={styles.button3}></TouchableOpacity>
          <Image
            source={require("../assets/images/grapes.png")}
            resizeMode="contain"
            style={styles.image5}
          ></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoHeaderWithBackground1: {
    height: 84,
    width: 360,
    marginTop: 23
  },
  group: {
    width: 157,
    height: 89,
    marginTop: 9,
    marginLeft: 108
  },
  rect: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 26,
    borderWidth: 1,
    borderColor: "#000000",
    flexDirection: "row",
    flex: 1
  },
  imageFiller: {
    flex: 1,
    flexDirection: "row"
  },
  image: {
    width: 105,
    height: 66,
    marginRight: 26,
    marginTop: 13
  },
  button: {
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(255,191,8,1)",
    width: 150,
    borderRadius: 12,
    borderWidth: 0,
    borderColor: "#000000",
    height: 175
  },
  image2: {
    left: 0,
    position: "absolute",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    width: 150,
    top: 0,
    height: 177
  },
  buttonStack: {
    width: 150,
    height: 177,
    marginTop: 2
  },
  button1: {
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(255,191,8,1)",
    borderRadius: 12,
    borderWidth: 0,
    borderColor: "#000000",
    top: 2,
    width: 150,
    height: 175
  },
  image3: {
    left: 1,
    position: "absolute",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    top: 0,
    width: 150,
    height: 177
  },
  button1Stack: {
    width: 151,
    height: 177,
    marginLeft: 12
  },
  buttonStackRow: {
    height: 179,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 24,
    marginRight: 23
  },
  button2: {
    top: 0,
    left: 1,
    position: "absolute",
    backgroundColor: "rgba(255,191,8,1)",
    width: 150,
    borderRadius: 12,
    borderWidth: 0,
    borderColor: "#000000",
    height: 175
  },
  image4: {
    top: 0,
    left: 0,
    width: 150,
    position: "absolute",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    height: 177
  },
  button2Stack: {
    width: 151,
    height: 177,
    marginTop: 2
  },
  button3: {
    top: 2,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(255,191,8,1)",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#000000",
    width: 150,
    height: 177
  },
  image5: {
    top: 0,
    width: 150,
    position: "absolute",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    right: 0,
    height: 177
  },
  button3Stack: {
    width: 150,
    height: 179,
    marginLeft: 13
  },
  button2StackRow: {
    height: 179,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 23,
    marginRight: 23
  }
});

export default WordIdentification;
