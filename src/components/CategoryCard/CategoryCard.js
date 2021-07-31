import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./CategoryCard.style";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const CategoryCard = ({ item }) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Meals", {
      categoryName: item.strCategory,
    })}>
      <View style={styles.container}>
        <Image source={{
          uri: item.strCategoryThumb,
        }} style={styles.image} />
        <Text style={styles.text}>{item.strCategory}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
