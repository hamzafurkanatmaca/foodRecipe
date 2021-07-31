import {StyleSheet} from 'react-native';

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
    position:'absolute',
    fontSize:20,
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
    backgroundColor:'rgba(80, 91, 73, 0.36)',
    width:350,
    height: 40,
    paddingTop:10
  },
})
