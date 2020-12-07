import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import CupertinoHeaderWithBackground1 from "../components/CupertinoHeaderWithBackground1";

function WordIdentification(props) {
  return (
    <View style={styles.container}>
      <CupertinoHeaderWithBackground1
        style={styles.cupertinoHeaderWithBackground1}
      ></CupertinoHeaderWithBackground1>
      <View style={styles.rect}>
        <View style={styles.imageFiller}></View>
        <Image
          source={require("../assets/images/kela1.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("../assets/images/apple2.jpg")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </TouchableOpacity>
        <View style={styles.buttonFiller}></View>
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
        <View style={styles.button2StackFiller}></View>
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
    height: 52,
    marginTop: 22
  },
  rect: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 26,
    borderWidth: 1,
    borderColor: "#000000",
    width: 175,
    height: 99,
    flexDirection: "row",
    marginTop: 37,
    marginLeft: 105
  },
  imageFiller: {
    flex: 1,
    flexDirection: "row"
  },
  image: {
    width: 117,
    height: 73,
    marginRight: 29,
    marginTop: 13
  },
  button: {
    backgroundColor: "rgba(255,191,8,1)",
    width: 150,
    borderRadius: 12,
    borderWidth: 0,
    borderColor: "#000000"
  },
  image2: {
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    width: 150,
    flex: 1,
    marginBottom: 1
  },
  buttonFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button1: {
    position: "absolute",
    backgroundColor: "rgba(255,191,8,1)",
    right: 1,
    borderRadius: 12,
    borderWidth: 0,
    borderColor: "#000000",
    top: 0,
    bottom: 0,
    width: 150
  },
  image3: {
    position: "absolute",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    right: 0,
    top: 0,
    bottom: 1,
    width: 150
  },
  button1Stack: {
    width: 151
  },
  buttonRow: {
    height: 203,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 24,
    marginRight: 23
  },
  button2: {
    top: 1,
    left: 1,
    position: "absolute",
    backgroundColor: "rgba(255,191,8,1)",
    width: 150,
    borderWidth: 0,
    borderColor: "#000000",
    bottom: 0
  },
  image4: {
    top: 0,
    left: 0,
    width: 150,
    position: "absolute",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    bottom: 2
  },
  button2Stack: {
    width: 151
  },
  button2StackFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button3: {
    top: 1,
    position: "absolute",
    backgroundColor: "rgba(255,191,8,1)",
    right: 0,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#000000",
    bottom: 0,
    width: 150
  },
  image5: {
    top: 0,
    width: 150,
    position: "absolute",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    right: 0,
    bottom: 0
  },
  button3Stack: {
    width: 150,
    marginBottom: 1
  },
  button2StackRow: {
    height: 204,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 23,
    marginRight: 24
  }
});

export default WordIdentification;
