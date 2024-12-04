import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Pressable, Text } from "react-native";

import { GetPokemonDetailsResponse } from "@/app/data/api/pokemon.model";
import { colors, fonts, TextSize } from "../../../utils";
import { FormTab } from "./FormTab";
import { TypeTab } from "./TypeTab";
import { StatsTab } from "./StatsTab";
import { DetailsTab } from "./DetailsTab";

interface Props {
  pokemon: GetPokemonDetailsResponse;
}

enum TabsEnum {
  Forms = "Forms",
  Details = "Details",
  Stats = "Stats",
  Type = "Type",
}

export function Tabs({ pokemon }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onChangeSelectedTab = (index: number) => {
    setSelectedIndex(index);
  };

  const _renderTabTitle = (type: TabsEnum) => {
    const currentIndex = Object.values(TabsEnum).findIndex(
      (tab) => tab === TabsEnum[type]
    );
    const isSelected = currentIndex === selectedIndex;

    return (
      <Pressable
        key={`tabTitle-${currentIndex}`}
        onPress={() => onChangeSelectedTab(currentIndex)}
      >
        <Text
          style={[
            styles.tabsNavigationTitle,
            isSelected ? styles.selectedNavigationTitle : null,
          ]}
        >
          {TabsEnum[type].toLocaleUpperCase()}
        </Text>
      </Pressable>
    );
  };

  const _renderTab = () => {
    switch (selectedIndex) {
      case 0:
        return <FormTab pokemon={pokemon} />;
      case 1:
        return <DetailsTab pokemon={pokemon} />;
      case 2:
        return <StatsTab pokemon={pokemon} />;
      case 3:
        return <TypeTab pokemon={pokemon} />;

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal bounces={false}>
        {_renderTabTitle(TabsEnum.Forms)}
        {_renderTabTitle(TabsEnum.Details)}
        {_renderTabTitle(TabsEnum.Stats)}
        {_renderTabTitle(TabsEnum.Type)}
      </ScrollView>
      {_renderTab()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsNavigationTitle: {
    fontSize: TextSize.m,
    fontFamily: fonts.InterBold,
    padding: 12,
    color: colors.blue,
  },
  selectedNavigationTitle: {
    color: colors.black,
  },
  text: {
    fontSize: TextSize.m,
  },
});
