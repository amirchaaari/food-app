import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { HomeIcon,ShoppingBagIcon,Bars3Icon } from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';


const Footr = () => {
const  navigation=useNavigation();
  return (
    
<View style={styles.footerContainer} className="bg-slate-300 flex-row justify-center">
<TouchableOpacity className="mx-10" onPress={()=>{navigation.navigate("Home")}}><HomeIcon size={40} color="white"/></TouchableOpacity>
<TouchableOpacity className="mx-10"><Bars3Icon size={40} color="white"/></TouchableOpacity>
<TouchableOpacity className="mx-10" onPress={()=>{navigation.navigate("Cart")}}><ShoppingBagIcon size={40} color="white"/></TouchableOpacity>


</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }})
  export default Footr