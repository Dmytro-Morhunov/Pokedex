import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PokemonDetails, Pokemons } from "../screens";
import { colors } from "../utils";
import { HeaderLeft } from "./headerLeft";
import { Pokemon } from "@/app/data/api/pokemon.model";

export enum Screens {
  Pokemons = "pokemons",
  PokemonDetails = "pokemonDetails",
}

export type StackNavigationParamsList = {
  [Screens.Pokemons]: undefined;
  [Screens.PokemonDetails]: { pokemon: Pokemon };
};

const Stack = createNativeStackNavigator<StackNavigationParamsList>();

export function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.Pokemons}
        component={Pokemons}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screens.PokemonDetails}
        component={PokemonDetails}
        options={{
          headerLeft: HeaderLeft,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.primary,
          },
        }}
      />
    </Stack.Navigator>
  );
}
