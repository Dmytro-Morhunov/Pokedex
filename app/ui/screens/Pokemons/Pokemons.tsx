import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  RefreshControl,
  ListRenderItemInfo,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  useLazyGetPokemonDetailsQuery,
  useGetPokemonsQuery,
} from "../../../data/api/pokemon";

import { ErrorMessage, Loader } from "../../components";
import { fonts, TextSize, colors, getPokemonUrlById } from "../../utils";
import { Pokemon } from "@/app/data/api/pokemon.model";
import { PokemonCard } from "./PokemonCard";
import { Search } from "./Search";

export function Pokemons() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [input, setInput] = useState("");
  const [page, setPage] = useState(0);
  const isSearchDisabled = input.length === 0;
  const {
    data: pokemons,
    isLoading,
    error: getPokemonsError,
    isFetching,
  } = useGetPokemonsQuery(page);

  const [
    findPokemonByNameOrId,
    {
      currentData: findedPokemon,
      error: findPokemonError,
      isLoading: isFindPokemonLoading,
    },
  ] = useLazyGetPokemonDetailsQuery({});

  useEffect(() => {
    if (input.length === 0) {
      setIsSearchActive(false);
    }
  }, [input]);

  const onRefresh = () => {
    setPage(0);
  };

  const handleFindPokemon = () => {
    setIsSearchActive(true);
    findPokemonByNameOrId(input.toLowerCase());
  };

  const _renderList = () => {
    if (isLoading) return <Loader />;
    if (getPokemonsError) {
      return <ErrorMessage />;
    }
    return (
      <FlatList
        refreshControl={
          <RefreshControl
            colors={[colors.blue]}
            refreshing={isFetching}
            onRefresh={onRefresh}
          />
        }
        onEndReached={() => setPage((prevState) => prevState + 1)}
        onEndReachedThreshold={0.8}
        columnWrapperStyle={styles.listColumn}
        data={pokemons?.results}
        renderItem={(props) => <PokemonCard {...props} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  const _renderSearchResult = () => {
    if (isFindPokemonLoading) {
      return <Loader />;
    }
    if (findPokemonError) {
      if (
        "originalStatus" in findPokemonError &&
        findPokemonError.originalStatus === 404
      ) {
        return <Text style={styles.warning}>Not found</Text>;
      }
      return <ErrorMessage />;
    }

    if (findedPokemon) {
      const pokemon = {
        item: {
          name: findedPokemon.name,
          url: getPokemonUrlById(findedPokemon.id),
        },
        index: 0,
      } as ListRenderItemInfo<Pokemon>;
      return <PokemonCard {...pokemon} />;
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerMargin}>
        <Text style={styles.title}>Pokedex</Text>
        <Text style={styles.subtitle}>
          Search for a pokemons by name or using its National Pokedex number
        </Text>
        <Search
          inputValue={input}
          isSearchDisabled={isSearchDisabled}
          onChangeTextInput={setInput}
          onFindPokemon={handleFindPokemon}
        />
        {isSearchActive ? _renderSearchResult() : _renderList()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  containerMargin: {
    marginHorizontal: 16,
  },
  title: {
    fontSize: TextSize.xl,
    fontFamily: fonts.InterBold,
    color: colors.darkBlue,
  },
  subtitle: {
    paddingTop: 16,
    fontSize: TextSize.m,
    fontFamily: fonts.InterRegular,
    color: colors.darkBlue,
  },
  listColumn: {
    justifyContent: "space-between",
  },
  warning: {
    fontSize: TextSize.l,
    fontFamily: fonts.InterBold,
    color: colors.darkBlue,
    alignSelf: "center",
  },
});
