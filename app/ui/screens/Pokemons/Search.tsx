import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Input } from "../../components";
import { colors } from "../../utils";

interface Props {
  inputValue: string;
  isSearchDisabled: boolean;

  onFindPokemon: () => void;
  onChangeTextInput: (text: string) => void;
}

export function Search({
  inputValue,
  isSearchDisabled,
  onChangeTextInput,
  onFindPokemon,
}: Props) {
  return (
    <View style={styles.inputContainer}>
      <Input
        value={inputValue}
        onChange={onChangeTextInput}
        leftImage={<Ionicons name="search" size={32} color={colors.blue} />}
      />
      <Pressable disabled={isSearchDisabled} onPress={onFindPokemon}>
        <Ionicons
          name="list-outline"
          size={32}
          color={colors.white}
          style={[
            styles.searchButton,
            {
              backgroundColor: isSearchDisabled ? colors.blue : colors.darkBlue,
            },
          ]}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginVertical: 24,
    justifyContent: "space-between",
  },
  searchButton: {
    width: 60,
    height: 60,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 8,
  },
});
