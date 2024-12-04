import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { GetPokemonDetailsResponse } from "@/app/data/api/pokemon.model";
import { fonts, TextSize } from "../../../utils";

interface Props {
  pokemon: GetPokemonDetailsResponse;
}

export function DetailsTab({ pokemon }: Props) {
  return (
    <View style={styles.tabContentPadding}>
      <Text style={styles.textContainer}>
        <Text style={styles.textBold}>Height:</Text>
        <Text style={styles.text}>{` ${pokemon.height}`}'</Text>
      </Text>
      <Text style={styles.textContainer}>
        <Text style={styles.textBold}>Weight:</Text>
        <Text style={styles.text}>{` ${pokemon.weight}`} kg.</Text>
      </Text>
      <Text style={styles.textContainer}>
        <Text style={styles.textBold}>Base experience:</Text>
        <Text style={styles.text}>{` ${pokemon.base_experience}`} points</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textBold: {
    fontSize: TextSize.m,
    fontFamily: fonts.InterBold,
  },
  text: {
    fontSize: TextSize.m,
  },
  textContainer: {
    paddingVertical: 6,
  },
  tabContentPadding: {
    paddingHorizontal: 14,
  },
});
