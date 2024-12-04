import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

import { GetPokemonDetailsResponse } from "@/app/data/api/pokemon.model";
import { fonts, TextSize } from "../../../utils";

interface Props {
  pokemon: GetPokemonDetailsResponse;
}

const { width } = Dimensions.get("window");

export function FormTab({ pokemon }: Props) {
  const { front_default, front_shiny, back_default, back_shiny } =
    pokemon.sprites;
  const imageSize = width / 3;
  return (
    <View style={styles.container}>
      {front_default ? (
        <View style={styles.cardContainer}>
          <Image
            source={{ uri: front_default }}
            width={imageSize}
            height={imageSize}
          />
          <Text style={styles.textBold}>Front Default</Text>
        </View>
      ) : null}
      {front_shiny ? (
        <View style={styles.cardContainer}>
          <Image
            source={{ uri: front_shiny }}
            width={imageSize}
            height={imageSize}
          />
          <Text style={styles.textBold}>Front Shiny</Text>
        </View>
      ) : null}

      {back_default ? (
        <View style={styles.cardContainer}>
          <Image
            source={{ uri: back_default }}
            width={imageSize}
            height={imageSize}
          />
          <Text style={styles.textBold}>Back Default</Text>
        </View>
      ) : null}

      {back_shiny ? (
        <View style={styles.cardContainer}>
          <Image
            source={{ uri: back_shiny }}
            width={imageSize}
            height={imageSize}
          />
          <Text style={styles.textBold}>Back Shiny</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: width / 2 - 32,
    justifyContent: "center",
    alignItems: "center",
  },
  textBold: {
    fontSize: TextSize.m,
    fontFamily: fonts.InterBold,
  },
  text: {
    fontSize: TextSize.m,
  },
});
