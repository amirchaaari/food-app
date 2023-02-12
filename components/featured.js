import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from './RestaurantCard';


const Featured = () => {
  const [featrued,setfeatrued]=useState([]);

  
  // useEffect(()=>{
  //   client.fetch(`
  //   *[_type=="category"]
  //   `)
  //   .then((data)=>{setCategories(data);});
  //   },[])
  //   console.log(categories);




    useEffect(() => {
      fetch('https://ehe8yni1.api.sanity.io/v2021-10-21/data/query/production?query=%2F%2F%20*%5B_type%3D%3D%22category%22%5D%0A*%5B_type%20%3D%3D%20%22recommanded%22%5D%7B%0A%20%20nameplat-%3E%7B%0A%20%20%20%20name%2C%20price%2C%20image%2C%20description%2C%20category%2C%20rating%0A%20%20%7D%0A%7D%0A%0A%0A%2F%2F%20*%5B_type%20%3D%3D%20%22plat%22%20%26%26%20category._ref%20%3D%3D%20%22dcc3a22e-0418-4633-a2b7-68f26c9dee8e%22%5D%0A%2F%2F%20*%5B_type%20%3D%3D%20%22plat%22%20%26%26%20category-%3Ename%20%3D%3D%20%22street%20food%22%5D%0A%0A%0A%2F%2F%20*%5B_type%20%3D%3D%20%22plat%22%5D%7B%0A%2F%2F%20%20%20price%2C%20name%2C%0A%2F%2F%20%20%20%22category%22%3A%20*%5B_type%20%3D%3D%20%22category%22%5D%7B...%7D%0A%2F%2F%20%7D%0A%2F%2F%20*%5B_type%3D%3D%22recommanded%22%5D%7B...%2Crestaurants%5B%5D-%3E%7B...%2Cdishes%5B%5D%7D%7D%0A%2F%2F%20*%5B_type%3D%3D%22recommanded%22%5D%7B...%2Crestaurants%5B%5D-%3E%7B...%2Cdishes%5B%5D-%3E%2Ctype-%3E%7Bname%7D%7D%7D')
          .then((response) => response.json())
          .then((json) => {
            setfeatrued(json.result)
          })
          .catch((error) => {
              console.error(error);
          });
  }, []);
  console.log(featrued)

  return (
    <View>
    <View className="mt-4 flex-row items-center justify-between px-4">
      <Text className="font-bold text-lg">Nos specialite</Text>
      <ArrowRightIcon color="#00CCBB"></ArrowRightIcon>
      
    </View>
    {/* <Text className="px-4 opacity-60">{description}</Text> */}
    <ScrollView horizontal  className="pt-4 pb-4 mx-4">
    {/* <RestaurantCard id={12} image={require("../images/pizza.jpg")} title="yo sushi" rating={4.5} genre="japaneese" adress="Dqdq" shortdescription="2 kek 2101"  /> */}
    {featrued.map((category)=>
    <RestaurantCard 
    key={category.nameplat.name}
    rating={category.nameplat.rating}
    description={category.nameplat.description}
    price={category.nameplat.price}




    title={category.nameplat.name}
    // path={urlFor=(category.image).width(200).url()}
      path={
        `https://cdn.sanity.io/images/ehe8yni1/production/${(category.nameplat.image.asset._ref).substring((category.nameplat.image.asset._ref).indexOf("-")+1,(category.nameplat.image.asset._ref).length-4)}.${category.nameplat.image.asset._ref.substring(category.nameplat.image.asset._ref.length-3)}`}
            
            /> 
)
}   
    </ScrollView>
    </View>
  )
}

export default Featured