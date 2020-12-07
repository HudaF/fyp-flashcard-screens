import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import CupertinoHeaderWithBackground2 from "../components/CupertinoHeaderWithBackground2";

function WordIdentification(props) {
  return (
    <View style={styles.container}>
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
      <View style={styles.buttonColumnRow}>
        <View style={styles.buttonColumn}>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require("../assets/images/apple2.jpg")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Image
              source={require("../assets/images/keela_image.jpg")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.button1Column}>
          <TouchableOpacity style={styles.button1}>
            <Image
              source={require("../assets/images/aam.jpg")}
              resizeMode="contain"
              style={styles.image3}
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
        <Image
          source={require("../assets/images/apple3.jpg")}
          resizeMode="contain"
          style={styles.image6}
        ></Image>
      </View>
      <CupertinoHeaderWithBackground2
        style={styles.cupertinoHeaderWithBackground2}
      ></CupertinoHeaderWithBackground2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  group: {
    width: 157,
    height: 89,
    marginTop: 116,
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
    borderWidth: 0,
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
  button2: {
    backgroundColor: "rgba(255,191,8,1)",
    width: 150,
    borderRadius: 12,
    borderWidth: 0,
    borderColor: "#000000",
    height: 175,
    marginTop: 15
  },
  image4: {
    width: 129,
    borderRadius: 12,
    height: 124,
    marginTop: 26,
    marginLeft: 11
  },
  buttonColumn: {
    width: 150
  },
  button1: {
    backgroundColor: "rgba(255,191,8,1)",
    borderRadius: 12,
    borderWidth: 0,
    borderColor: "#000000",
    width: 150,
    height: 175
  },
  image3: {
    borderRadius: 12,
    width: 124,
    height: 138,
    marginTop: 19,
    marginLeft: 13
  },
  button3: {
    backgroundColor: "rgba(255,191,8,1)",
    borderRadius: 12,
    width: 150,
    height: 175,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 1
  },
  image5Filler: {
    flex: 1,
    flexDirection: "row"
  },
  image5: {
    width: 129,
    borderRadius: 12,
    height: 124,
    marginRight: 11,
    marginTop: 27
  },
  button1Column: {
    width: 151,
    marginLeft: 12
  },
  image6: {
    width: 169,
    height: 158,
    marginLeft: 766,
    marginTop: 150
  },
  buttonColumnRow: {
    height: 365,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 24,
    marginRight: -912
  },
  cupertinoHeaderWithBackground2: {
    height: 55,
    width: 360,
    marginTop: -563
  }
});

export default WordIdentification;
