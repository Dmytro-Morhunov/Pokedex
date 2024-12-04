import React, { useCallback, useLayoutEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { SvgUri } from "react-native-svg";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import {
  capitalizeFirstLetter,
  colors,
  fonts,
  getPokemonId,
  getPokemonImageUrlById,
  TextSize,
} from "../../utils";
import { useGetPokemonDetailsQuery } from "@/app/data/api/pokemon";
import { Screens, StackNavigationParamsList } from "../../navigation";
import { Tabs } from "./Tabs";
import { ErrorMessage, Loader } from "../../components";

type Props = NativeStackScreenProps<
  StackNavigationParamsList,
  Screens.PokemonDetails
>;

const { width } = Dimensions.get("window");

export function PokemonDetails({ route, navigation }: Props) {
  const { name, url } = route.params.pokemon;
  const {
    data: pokemon,
    refetch,
    isLoading,
    isError,
  } = useGetPokemonDetailsQuery(name);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => {
        const pokemonId = getPokemonId(url);
        return (
          <View>
            <Text style={styles.headerCenterName}>
              {capitalizeFirstLetter(name)}
            </Text>
            <Text style={styles.headerCenterId}>{pokemonId}</Text>
          </View>
        );
      },
    });
  }, []);

  const _renderPokemon = useCallback(() => {
    if (isLoading) return <Loader />;

    if (isError)
      return <ErrorMessage buttonTitle="Refresh" buttonAction={refetch} />;

    if (pokemon) {
      return (
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <SvgUri
              uri={getPokemonImageUrlById(`${pokemon.id}`)}
              width={width - 150}
              height={width - 150}
              style={styles.image}
            />
          </View>
          <Tabs pokemon={pokemon} />
        </View>
      );
    }

    return null;
  }, [pokemon, isLoading, isError, refetch]);

  return <ScrollView style={styles.container}>{_renderPokemon()}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: colors.primary,
  },
  contentContainer: { padding: 24 },
  headerCenterName: {
    fontSize: TextSize.l,
    fontFamily: fonts.InterBold,
    color: colors.darkBlue,
    textAlign: "center",
  },
  headerCenterId: {
    paddingTop: 4,
    fontSize: TextSize.m,
    fontFamily: fonts.InterRegular,
    color: colors.darkBlue,
    textAlign: "center",
  },

  imageContainer: {
    backgroundColor: colors.white,
    marginBottom: 24,
    borderRadius: 16,
  },
  image: { alignSelf: "center", marginVertical: 50 },
});
