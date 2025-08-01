import { IntroStyles } from "@/styles/intro.styles";
import { ImageBackground, Text, TouchableOpacity, View, } from "react-native";

export default function Index() {
  return (
   <View style={IntroStyles.cover}>
    <ImageBackground
     style={IntroStyles.bg}
    source={require("../assets/images/intro_bg.jpg")}>
      <View style={IntroStyles.layer}>
        <View style={IntroStyles.header}>
          <Text style={IntroStyles.title}>UniPeers</Text>
        </View>

        <View style= {IntroStyles.body}>
          <Text>The school app for socializing.
            Connext with friends , create your own
             event, and find other amazing events from 
             students.</Text>
        </View>
        <View>
          <TouchableOpacity style={IntroStyles.btn}>
            <Text>Get Started</Text>
          </TouchableOpacity>
        </View>

          
        
      </View>
    </ImageBackground>
   </View>
    
   
  )
}
