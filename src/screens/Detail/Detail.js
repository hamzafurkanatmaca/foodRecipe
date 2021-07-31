import React from "react";
import { SafeAreaView, Image, View, Text, ScrollView } from "react-native";
import styles from "./Detail.style";
import useFetch from "../../hooks/useFetch";
import DetailCard from "../../components/DetailCard";

const URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";


const Detail = ({ route }) => {
  const { mealId } = route.params;
  const { loading, data } = useFetch(URL + mealId);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <DetailCard item={data.meals[0]} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
