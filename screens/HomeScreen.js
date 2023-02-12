import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { UserIcon,MagnifyingGlassCircleIcon,ChevronDownIcon } from "react-native-heroicons/outline";
import Cats from '../components/cats';
import Featured from '../components/featured';
import Footr from '../components/footr';
import { useState } from 'react';
// import sanityClient from '../sanity'



const HomeScreen = () => {
  const route = useRoute();
  // const username = route.params.username;
// console.log(username);
  const navigation= useNavigation();
  

  // const [featrued,setfeatrued]=useState([])
//when the screen appears do something
// useLayoutEffect(() => {
//   navigation.setOptions({
//   })


// }, [])
// useEffect(()=>{
// sanityClient.fetch
// },[])

  return (


    <SafeAreaView className="bg-gray flex-1" >

      <View className="flex-row  items-center mx-1 mt-2 space-x-2">
      <Image 
       className="h-14 w-14 bg-gray-300 rounded-full	" 
                      // style={styles.tinyLogo}

      source={require('../images/logo.jpg')}>

      </Image>
      <View className= "flex-1">
        <Text>livrer maintenant !</Text>
        <Text className="font-bold">Mon Location
        <ChevronDownIcon></ChevronDownIcon>        
</Text>

      </View>
      {/* <View><Text>{username}</Text></View> */}
      <UserIcon color="purple" size={40}></UserIcon>

      </View>
    <View className="flex-row mx-2 mt-4 mb-4 bg-slate-200">
      {/* <MagnifyingGlassCircleIcon color="gray" size={40}></MagnifyingGlassCircleIcon>
      <TextInput  placeholder='cherchez ici'></TextInput> */}
      </View>    
  <View>    
  <Cats></Cats>

<ScrollView >

<Featured  title="Notre spécialité" description="Nos plat recommandée" id="featured"></Featured>
</ScrollView>
</View>
<Footr></Footr>
    </SafeAreaView>
    
    
  )
}


export default HomeScreen