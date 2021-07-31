import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container:{
    backgroundColor:'white',
    marginBottom:10,
    borderRadius: 20,
    marginHorizontal:20,
    flexDirection:'row',
    marginTop:10
  },
  image:{
    width:100,
    height:100,
    resizeMode:'contain',
    backgroundColor: 'white',
    borderRadius:10,
    flex:1
  },
  text:{
    fontSize:20,
    flex:2,
    paddingVertical:30,
    paddingLeft:20
  }
})
