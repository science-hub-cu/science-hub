import React from "react";
import { View,SafeAreaView,StyleSheet,Image,Text } from "react-native";
import COLORS from "../assets/colors";
import Button from "../components/Button";
const RetryScreen=()=>{
return <SafeAreaView style={styles.container}>
    <Image 
        source={require('../assets/images/retry.png')}
        style={styles.image}
    >
    </Image>
    <Text style={styles.text}>No internet connection</Text>
    <View style={{marginLeft:"25%"}}>
    <Button title={"Reload Page"} width="60%"></Button>
    </View>
</SafeAreaView>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground
  },image:{
        width:120,
        height:120,
        marginTop:"60%",
        marginBottom:"10%",
        alignSelf:'center'
    },
    text:{
        color:COLORS.white,
        fontWeight:700,
        fontSize:20,
        alignSelf:"center"
        
        // marginHorizontal:"20%"
        // paddingHorizontal:"10%"
        
         

    }  
})
export default RetryScreen;

