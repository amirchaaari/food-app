import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const Dishes = ({name,path,price,description,id,rating}) => {
  
  const navigation= useNavigation();

  return (
    <TouchableOpacity  onPress={()=>{navigation.navigate("Details",{description,name,price,path,id,rating});}} className=" mx-4  rounded bg-white items-center relative mb-4 ">
    <Image className="h-36 w-48 rounded mt-4	" 

  source={{
    uri:path
  }}>

  </Image>
  <Text className="font-bold text-lg pt-2">{name}</Text>
  <View className="mb-2"><Text className="font-bold">  Prix:  {price} DT</Text>
</View>

</TouchableOpacity>
  )
}

export default Dishes