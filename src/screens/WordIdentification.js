import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import CupertinoHeaderWithBackground1 from "../components/CupertinoHeaderWithBackground1";
import Word from "../components/Word";

function WordIdentification(props) {
  return (
    <View style={styles.container}>
      <CupertinoHeaderWithBackground1
        style={styles.cupertinoHeaderWithBackground1}
      ></CupertinoHeaderWithBackground1>
      <View style={styles.rect}>
        <Word style={styles.word}></Word>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
        <View style={styles.buttonFiller}></View>
        <TouchableOpacity style={styles.button1}></TouchableOpacity>
      </View>
      <View style={styles.button2Row}>
        <TouchableOpacity style={styles.button2}></TouchableOpacity>
        <View style={styles.button2Filler}></View>
        <TouchableOpacity style={styles.button3}></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoHeaderWithBackground1: {
    height: 51,
    marginTop: 22
  },
  rect: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 26,
    borderWidth: 1,
    borderColor: "#000000",
    width: 175,
    height: 97,
    marginTop: 38,
    marginLeft: 92
  },
  word: {
    height: 72,
    width: 82,
    marginTop: 20,
    marginLeft: 54
  },
  button: {
    backgroundColor: "#E6E6E6",
    width: 150,
    height: 197
  },
  buttonFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button1: {
    backgroundColor: "#E6E6E6",
    height: 197,
    width: 150
  },
  buttonRow: {
    height: 197,
    flexDirection: "row",
    marginTop: 72,
    marginLeft: 17,
    marginRight: 17
  },
  button2: {
    backgroundColor: "#E6E6E6",
    width: 150,
    height: 197
  },
  button2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  button3: {
    backgroundColor: "#E6E6E6",
    height: 197,
    width: 150
  },
  button2Row: {
    height: 197,
    flexDirection: "row",
    marginTop: 29,
    marginLeft: 17,
    marginRight: 17
  }
});

export default WordIdentification;
