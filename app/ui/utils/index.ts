import { baseUrl } from "@/app/data/api/config";

export const colors = {
  black: "rgb(0, 0, 0)",
  white: "rgb(255, 255, 255)",
  primary: "rgb(242, 250, 250)",
  primaryDark: "rgb(230, 240, 243)",
  darkBlue: "rgb(33, 34, 68)",
  blue: "rgb(75, 75, 106)",
  red: "rgb(205, 0, 0)",
};

export enum fonts {
  InterLight = "Inter-Light",
  InterRegular = "Inter-Regular",
  InterBold = "Inter-Bold",
  InterBlack = "Inter-Black",
}

export enum TextSize {
  s = 8,
  m = 16,
  l = 24,
  xl = 36,
}

export const capitalizeFirstLetter = (value: string) =>
  String(value).charAt(0).toUpperCase() + String(value).slice(1);

export const getPokemonId = (url: string) =>
  url.split("/")[url.split("/").length - 2];

export const getPokemonUrlById = (id: number) => `${baseUrl}"/pokemon/${id}/`;

export const getPokemonImageUrlById = (id: string) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
