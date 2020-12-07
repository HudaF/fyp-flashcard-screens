import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import CupertinoHeaderWithBackground2 from "../components/CupertinoHeaderWithBackground2";

function ObjectIDent(props) {
  return (
    <View style={styles.container}>
      <View style={styles.cupertinoHeaderWithBackground3Row}>
        <CupertinoHeaderWithBackground2
          style={styles.cupertinoHeaderWithBackground3}
        ></CupertinoHeaderWithBackground2>
        <View style={styles.group3}>
          <CupertinoHeaderWithBackground2
            style={styles.cupertinoHeaderWithBackground2}
          ></CupertinoHeaderWithBackground2>
        </View>
      </View>
      <View style={styles.group}>
        <View style={styles.rect}>
          <Image
            source={require("../assets/images/apple4.jpg")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
      </View>
      <View style={styles.group2}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require("../assets/images/kela3.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
            <Image
              source={require("../assets/images/saib.png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.button2Row}>
          <TouchableOpacity style={styles.button2}>
            <Image
              source={require("../assets/images/aam_text.png")}
              resizeMode="contain"
              style={styles.image7}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button3}>
            <Image
              source={require("../assets/images/angoor.png")}
              resizeMode="contain"
              style={styles.image8}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoHeaderWithBackground3: {
    width: 360,
    height: 43
  },
  group3: {
    width: 360,
    height: 43,
    marginLeft: 466,
    marginTop: 30
  },
  cupertinoHeaderWithBackground2: {
    flex: 1
  },
  cupertinoHeaderWithBackground3Row: {
    height: 73,
    flexDirection: "row",
    marginLeft: -826
  },
  group: {
    width: 296,
    height: 177,
    marginTop: 29,
    marginLeft: 38
  },
  rect: {
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 20,
    flex: 1
  },
  image: {
    width: 149,
    height: 158,
    marginLeft: 73
  },
  group2: {
    width: 289,
    height: 220,
    marginTop: 31,
    marginLeft: 42
  },
  button: {
    width: 135,
    height: 91,
    backgroundColor: "rgba(255,191,8,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 15
  },
  image2: {
    width: 95,
    height: 60,
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 21
  },
  button1: {
    width: 135,
    height: 91,
    backgroundColor: "rgba(255,191,8,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 15,
    marginLeft: 19
  },
  image4: {
    width: 95,
    height: 60,
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 21
  },
  buttonRow: {
    height: 91,
    flexDirection: "row"
  },
  button2: {
    width: 135,
    height: 91,
    backgroundColor: "rgba(255,191,8,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 15
  },
  image7: {
    width: 96,
    height: 60,
    borderRadius: 5,
    marginTop: 17,
    marginLeft: 21
  },
  button3: {
    width: 135,
    height: 91,
    backgroundColor: "rgba(255,191,8,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 15,
    marginLeft: 19
  },
  image8: {
    width: 95,
    height: 60,
    borderRadius: 5,
    marginTop: 17,
    marginLeft: 21
  },
  button2Row: {
    height: 91,
    flexDirection: "row",
    marginTop: 38
  }
});

export default ObjectIDent;
