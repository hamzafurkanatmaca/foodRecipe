import React from "react";
import { SafeAreaView, Text, View, FlatList, Button, TouchableOpacity } from "react-native";
import styles from "./Categories.style";
import useFetch from "../../hooks/useFetch";
import CategoryCard from "../../components/CategoryCard";
import { useNavigation } from "@react-navigation/native";

const URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
//const URL='https://random-data-api.com/api/restaurant/random_restaurant?size=10';

const renderCategories = ({ item }) => {
  return (
    <CategoryCard item={item} />
  );
};

const Categories = () => {
  const { loading, data } = useFetch(URL);
  if (loading) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.categories}
        keyExtractor={item => item.idCategory}
        renderItem={renderCategories}
      />
    </SafeAreaView>
  );
};
export default Categories;
