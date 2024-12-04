export interface Pokemon {
  name: string;
  url: string;
}

export interface GetPokemonsResponse {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
}

type Ability = {
  ability: string[];
  is_hidden: boolean;
  slot: number;
};

type GameIndices = {
  game_index: number;
  version: string;
};

type HeldItems = {
  item: string[];
  version_details: string[];
};

type Moves = {
  move: string[];
  version_group_details: string[];
};

enum StatType {
  HP = "hp",
  ATTACK = "attack",
  DEFENSE = "defense",
  SP_ATTACK = "special-attack",
  SP_DEFENSE = "special-defense",
  SPEED = "speed",
}

type Stat = {
  base_stat: number;
  effort: string;
  stat: {
    name: StatType;
    ulr: string;
  };
};

type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export interface GetPokemonDetailsResponse {
  abilities: Ability[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: Pokemon[];
  game_indices: GameIndices[];
  height: number;
  held_items: HeldItems[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Moves[];
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
      dream_world: string[];
      home: string[];
      "official-artwork": string[];
      showdown: string[];
    };
  };
  stats: Stat[];
  weight: number;
  types: Type[];
}
