import React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from './MealCard.style';
import { useNavigation } from "@react-navigation/native";

const MealCard=({item})=>{
  const navigation=useNavigation();
  return(
    <TouchableOpacity onPress={()=>navigation.navigate('Detail',{
      mealId:  item.idMeal
    })}>
    <View style={styles.container}>
      <Image source={{
        uri:item.strMealThumb
      }} style={styles.image} />
      <Text style={styles.text}>{item.strMeal}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default MealCard;
