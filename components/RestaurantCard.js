import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapIcon, MapPinIcon} from 'react-native-heroicons/outline'


const RestaurantCard = ({id,path,title,rating,price,description}) => {
  return (

    <TouchableOpacity  className="bg-white  mr-4  ">
      <Image className="h-36 w-64 rounded-sm	" 

source={{
  uri:path
}}/>
      <View className="px-3 pb-4">
            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1">
            <StarIcon  color="green"  opacity={0.5} size={22}></StarIcon>
            <Text>{rating}</Text>
            </View>
            <View className="flex-row items-center space-x-1">
      <Text>{description}</Text>

            </View>
            <View><Text className="font-bold">  Prix:  {price} DT</Text>
</View>
      </View>

    </TouchableOpacity>
  )
}

export default RestaurantCard