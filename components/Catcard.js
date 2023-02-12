import { View, Text, TouchableOpacity, Image,StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { NativeWindStyleSheet } from "nativewind";
import { useNavigation } from '@react-navigation/native';

const Catcard = ({title,path,id}) => {
  const navigation=useNavigation();
  // const [t, setTitle] = useState(title);

  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate("Dish",{
      title,id
      });
    }} 
    className=" items-center relative mr-2">
        
        
        <Image className="h-20 w-20 rounded	" 
source={{
  uri:path
}}>
      </Image>
      
      <Text>{title}</Text>

      </TouchableOpacity>
  )
}

export default Catcard
const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });