import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Dishes from '../components/Dishes'
import { useRoute } from '@react-navigation/native';
import Footr from '../components/footr';

const Dish = () => {

        const route=useRoute();
        // console.log(route.params.title)
    const [dish,setDish]=useState([]);
const id=route.params.id;

// useEffect(()=>{
//     client.fetch(`
//     *[_type=="plat"]
//     `)
//     .then((data)=>{set(data);});
//     },[])
//     console.log(categories);








    useEffect(() => {
      fetch('https://ehe8yni1.api.sanity.io/v2021-10-21/data/query/production?query=%2F%2F%20*%5B_type%3D%3D%22category%22%5D%0A%2F%2F%20*%5B_type%3D%3D%22plat%22%5D%0A*%5B_type%20%3D%3D%20%22plat%22%20%26%26%20category._ref%20%3D%3D%20%22'+id+'%22%5D%0A%2F%2F%20*%5B_type%20%3D%3D%20%22plat%22%20%26%26%20category-%3Ename%20%3D%3D%20%22street%20food%22%5D%0A%0A%0A%2F%2F%20*%5B_type%20%3D%3D%20%22plat%22%5D%7B%0A%2F%2F%20%20%20price%2C%20name%2C%0A%2F%2F%20%20%20%22category%22%3A%20*%5B_type%20%3D%3D%20%22category%22%5D%7B...%7D%0A%2F%2F%20%7D%0A%2F%2F%20*%5B_type%3D%3D%22recommanded%22%5D%7B...%2Crestaurants%5B%5D-%3E%7B...%2Cdishes%5B%5D%7D%7D%0A%2F%2F%20*%5B_type%3D%3D%22recommanded%22%5D%7B...%2Crestaurants%5B%5D-%3E%7B...%2Cdishes%5B%5D-%3E%2Ctype-%3E%7Bname%7D%7D%7D')
          .then((response) => response.json())
          .then((json) => {
            setDish(json.result)
          })
          .catch((error) => {
              console.error(error);
          });
        
  }, []);

  return (
<View className="flex-1">
<ScrollView className="mt-4" >




{dish.map((d)=>




<Dishes

key={d._id}
id={d._id}
name={d.name}
price={d.price}
rating={d.rating}
  path={
    `https://cdn.sanity.io/images/ehe8yni1/production/${(d.image.asset._ref).substring((d.image.asset._ref).indexOf("-")+1,(d.image.asset._ref).length-4)}.${d.image.asset._ref.substring(d.image.asset._ref.length-3)}`}
    description={d.description}        

        /> 




        )
}
</ScrollView>
<Footr></Footr>

</View>

  )
}

export default Dish