import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function CupertinoHeaderWithBackground1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.leftWrapper}>
        <TouchableOpacity
          onPress={() => console.log("Navigate to Go Back")}
          style={styles.leftIconButton}
        >
          <IoniconsIcon
            name="ios-arrow-back"
            style={styles.leftIcon}
          ></IoniconsIcon>
          <Text style={styles.leftText}></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.wordIdentification}>
          Word Identification
        </Text>
      </View>
      <View style={styles.rightWrapper}></View>
      <FontAwesomeIcon
        name="align-justify"
        style={styles.icon}
      ></FontAwesomeIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(255,191,8,1)",
    paddingRight: 8,
    paddingLeft: 8
  },
  leftWrapper: {
    flex: 0.22,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon: {
    color: "#FFFFFF",
    fontSize: 32
  },
  leftText: {
    alignSelf: "center",
    fontSize: 17,
    paddingLeft: 5,
    color: "#FFFFFF"
  },
  textWrapper: {
    flex: 0.49,
    alignItems: "center",
    justifyContent: "center"
  },
  wordIdentification: {
    fontSize: 17,
    fontFamily: "poppins-700",
    lineHeight: 17,
    color: "rgba(255,255,255,1)",
    textAlign: "center"
  },
  rightWrapper: {
    flex: 0.21,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  icon: {
    top: 10,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    width: 40,
    height: 40,
    flex: 0.07,
    right: 5
  }
});

export default CupertinoHeaderWithBackground1;
