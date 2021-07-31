
import React from 'react';
import { View, Text, Image ,Button,Linking,TouchableHighlight} from "react-native";
import styles from './DetailCard.style';

const DetailCard=({item})=>{
  return(
      <View style={styles.container}>
        <Image source={{
          uri:item.strMealThumb
        }} style={styles.image} />
        <Text style={styles.text}>{item.strMeal}</Text>
        <Text style={styles.detail}>{item.strInstructions}</Text>
        <TouchableHighlight
          style ={{
            height: 40,
            width:160,
            borderRadius:10,
            backgroundColor : "red",
            color:'white',
            textColor:'white',
            marginLeft :50,
            marginRight:50,
          }}>
        <Button title="Youtube'da Aç!" color='white' onPress={ ()=>{ Linking.openURL(item.strYoutube)}} />
        </TouchableHighlight>
        </View>
  )
}

export default DetailCard;
