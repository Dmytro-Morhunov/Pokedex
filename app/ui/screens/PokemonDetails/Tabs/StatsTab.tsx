import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { GetPokemonDetailsResponse } from "@/app/data/api/pokemon.model";
import { fonts, TextSize } from "../../../utils";

interface Props {
  pokemon: GetPokemonDetailsResponse;
}

export function StatsTab({ pokemon }: Props) {
  return (
    <View style={styles.tabContentPadding}>
      {pokemon.stats.map((stat) => {
        return (
          <Text key={stat.stat.name} style={styles.textContainer}>
            <Text style={styles.textBold}>
              {stat.stat.name.toLocaleUpperCase()}:
            </Text>
            <Text style={styles.text}>{` ${stat.base_stat}`}</Text>
          </Text>
        );
      })}
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
