import React from "react";
import { SafeAreaView, View, Text, Image, FlatList } from "react-native";
import useFetch from "../../hooks/useFetch";
import MealCard from "../../components/MealCard";
import styles from "./Meals.style";

const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const renderMeals = ({ item }) => {
  return (
    <MealCard item={item} />
  );
};
const Meals = ({ route }) => {
  const { categoryName } = route.params;
  const { loading, data } = useFetch(URL + categoryName);
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.meals}
        renderItem={renderMeals}
        keyExtractor={item => item.idMeal}
      />
    </SafeAreaView>
  );
};

export default Meals;
