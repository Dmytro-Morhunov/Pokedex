import React from "react";
import { ActivityIndicator } from "react-native";

import { colors } from "../utils";

export function Loader() {
  return <ActivityIndicator size={48} color={colors.blue} />;
}
