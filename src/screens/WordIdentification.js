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
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("../assets/images/apple2.jpg")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Image
            source={require("../assets/images/aam.jpg")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.button2Row}>
        <TouchableOpacity style={styles.button2}>
          <Image
            source={require("../assets/images/keela_image.jpg")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <View style={styles.image5Filler}></View>
          <Image
            source={require("../assets/images/grapes.png")}
            resizeMode="contain"
            style={styles.image5}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  cupertinoHeaderWithBackground1: {
    height: 84,
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
    backgroundColor: "rgba(255,191,8,1)",
    width: 150,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#000000",
    height: 175
  },
  image2: {
    borderRadius: 12,
    width: 129,
    height: 124,
    marginTop: 26,
    marginLeft: 10
  },
  button1: {
    backgroundColor: "rgba(255,191,8,1)",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#000000",
    width: 150,
    height: 175,
    marginLeft: 12
  },
  image3: {
    borderRadius: 12,
    width: 124,
    height: 138,
    marginTop: 19,
    marginLeft: 13
  },
  buttonRow: {
    height: 175,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 24,
    marginRight: 24
  },
  button2: {
    backgroundColor: "rgba(255,191,8,1)",
    width: 150,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#000000",
    height: 175
  },
  image4: {
    width: 129,
    borderRadius: 12,
    height: 124,
    marginTop: 26,
    marginLeft: 11
  },
  button3: {
    backgroundColor: "rgba(255,191,8,1)",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#000000",
    width: 150,
    height: 177,
    flexDirection: "row",
    marginLeft: 13
  },
  image5Filler: {
    flex: 1,
    flexDirection: "row"
  },
  image5: {
    width: 129,
    borderRadius: 12,
    height: 124,
    marginRight: 7,
    marginTop: 25
  },
  button2Row: {
    height: 177,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 24,
    marginRight: 23
  }
});

export default WordIdentification;
