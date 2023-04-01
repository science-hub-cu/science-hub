import React from "react";
import { TouchableOpacity,Text} from "react-native";
import COLORS from "../assets/colors";
const Button = ({title,onPress=()=>{}})=>{
    return(
        <TouchableOpacity 
        activeOpacity={0.7}
          onPress={onPress}
          style={{
            marginTop:20,
            height:50,
            width:'85%',
            backgroundColor:COLORS.blue,
            justifyContent:"center",
             borderRadius: 25,

            
          }}
        >
        <Text style={{color:COLORS.white,fontWeight:'bold',fontSize:16,textAlign:"center"}}>{title}</Text>

        </TouchableOpacity>
    );

};
export default Button;