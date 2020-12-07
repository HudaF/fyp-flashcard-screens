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
        <TouchableOpacity style={styles.button1}>
          <View style={styles.image3Filler}></View>
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
        <View style={styles.button2Filler}></View>
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
    width: 150,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    flex: 1
  },
  buttonFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button1: {
    backgroundColor: "rgba(255,191,8,1)",
    height: 203,
    borderRadius: 12,
    borderWidth: 0,
    borderColor: "#000000",
    width: 150,
    flexDirection: "row"
  },
  image3Filler: {
    flex: 1,
    flexDirection: "row"
  },
  image3: {
    height: 202,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    width: 150
  },
  buttonRow: {
    height: 203,
    flexDirection: "row",
    marginTop: 78,
    marginLeft: 30,
    marginRight: 17
  },
  button2: {
    backgroundColor: "rgba(255,191,8,1)",
    width: 150,
    height: 203,
    borderRadius: 12,
    borderWidth: 0,
    borderColor: "#000000"
  },
  image4: {
    width: 150,
    height: 202,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    marginTop: 1
  },
  button2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  button3: {
    backgroundColor: "rgba(255,191,8,1)",
    height: 203,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#000000",
    width: 150,
    flexDirection: "row"
  },
  image5Filler: {
    flex: 1,
    flexDirection: "row"
  },
  image5: {
    width: 150,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    height: 203
  },
  button2Row: {
    height: 203,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 30,
    marginRight: 17
  }
});

export default WordIdentification;
