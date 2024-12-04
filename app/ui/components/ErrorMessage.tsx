import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import { colors, fonts, TextSize } from "../utils";

interface Props {
  buttonTitle?: string;
  buttonAction?: () => void;
}

export function ErrorMessage({ buttonTitle, buttonAction }: Props) {
  const _renderButton = () => {
    if (buttonTitle && buttonAction) {
      return (
        <Pressable style={styles.button} onPress={buttonAction}>
          <Text style={styles.buttonText}>{buttonTitle}</Text>
        </Pressable>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Something went wrong!</Text>
      <Text style={styles.text}>Try again!</Text>
      {_renderButton()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 12 },
  text: {
    fontSize: TextSize.l,
    fontFamily: fonts.InterBold,
    color: colors.red,
    alignSelf: "center",
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    alignSelf: "center",
    marginTop: 16,
  },
  buttonText: {
    fontSize: TextSize.m,
    color: colors.white,
    fontFamily: fonts.InterBold,
  },
});
