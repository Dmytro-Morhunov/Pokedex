import React from "react";
import {
  Pressable,
  View,
  Text,
  ListRenderItemInfo,
  StyleSheet,
  Dimensions,
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { SvgUri } from "react-native-svg";

import { Pokemon } from "@/app/data/api/pokemon.model";
import {
  capitalizeFirstLetter,
  colors,
  fonts,
  getPokemonId,
  getPokemonImageUrlById,
  TextSize,
} from "../../utils";
import { Screens, StackNavigationParamsList } from "../../navigation";

const { width } = Dimensions.get("window");

type Props = NavigationProp<StackNavigationParamsList, Screens.Pokemons>;

export function PokemonCard({ item: pokemon }: ListRenderItemInfo<Pokemon>) {
  const navigation = useNavigation<Props>();
  const pokemonId = getPokemonId(pokemon.url);

  const navigateToDetails = () => {
    navigation.navigate(Screens.PokemonDetails, { pokemon });
  };

  return (
    <Pressable onPress={navigateToDetails}>
      <View style={styles.cardContainer}>
        <SvgUri
          uri={getPokemonImageUrlById(pokemonId)}
          width={150}
          height={150}
        />
        <Text style={styles.cardName}>
          {capitalizeFirstLetter(pokemon.name)}
        </Text>
        <Text style={styles.cardId}>{pokemonId}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: width / 2 - 24,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    marginVertical: 8,
    borderRadius: 8,
  },
  cardName: {
    fontFamily: fonts.InterBold,
    fontSize: TextSize.m,
    color: colors.darkBlue,
    paddingTop: 16,
  },
  cardId: {
    fontFamily: fonts.InterRegular,
    fontSize: TextSize.m,
    color: colors.darkBlue,
    paddingTop: 8,
  },
});
