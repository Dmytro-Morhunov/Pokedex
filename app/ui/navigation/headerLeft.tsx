import React from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { colors } from "../utils";

export function HeaderLeft() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.canGoBack() && navigation.goBack();
  };

  return (
    <Pressable onPress={handleGoBack}>
      <Ionicons name="arrow-back-outline" size={28} color={colors.darkBlue} />
    </Pressable>
  );
}
