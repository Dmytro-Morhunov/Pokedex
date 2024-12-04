import React from "react";
import { View, TextInput, StyleSheet, TextStyle } from "react-native";

import { colors, TextSize } from "../utils";

interface Props {
  leftImage?: JSX.Element;
  value: string;
  inputStyles?: TextStyle;

  onChange: (value: string) => void;
}

export function Input(props: Props) {
  return (
    <View style={styles.container}>
      {props.leftImage}
      <TextInput
        placeholder="Name or number"
        style={[styles.input, props.inputStyles]}
        placeholderTextColor={colors.blue}
        value={props.value}
        onChangeText={props.onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 320,
    flexDirection: "row",
    padding: 16,
    backgroundColor: colors.primaryDark,
    borderRadius: 12,
  },
  input: {
    width: 250,
    height: "100%",
    fontSize: TextSize.m,
    marginHorizontal: 8,
  },
});
