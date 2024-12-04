import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { GetPokemonDetailsResponse } from "@/app/data/api/pokemon.model";
import { colors, fonts, TextSize } from "../../../utils";

interface Props {
  pokemon: GetPokemonDetailsResponse;
}

export function TypeTab({ pokemon }: Props) {
  return (
    <View style={[styles.tabContentPadding, styles.rowContainer]}>
      {pokemon.types.map((type) => {
        return (
          <Text key={type.type.name} style={styles.typeBadge}>
            {type.type.name.toLocaleUpperCase()}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContentPadding: {
    paddingHorizontal: 14,
  },
  rowContainer: {
    flexDirection: "row",
  },
  typeBadge: {
    padding: 12,
    backgroundColor: colors.blue,
    marginRight: 8,
    borderRadius: 20,
    color: colors.white,
    fontSize: TextSize.m,
    fontFamily: fonts.InterBold,
    textAlign: "center",
  },
});
