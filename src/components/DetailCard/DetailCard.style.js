
import { StyleSheet, TouchableHighlight } from "react-native";
import React from "react";

export default StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    marginTop:20
  },
  image:{
    flex:1,
    width:350,
    height:350
  },
  text:{
    fontSize:20,
    color:'red',
    fontWeight:'bold',
    textAlign:'center',
    width:350,
    height: 40,
    borderBottomWidth:1,
    borderBottomColor:'black',
    paddingTop:10
  },
  detail:{
    padding:23
  },
  button:{
    backgroundColor:'red',
    color:'white'
  }

})
