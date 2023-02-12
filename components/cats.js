import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Catcard from './Catcard';
import client, { urlFor } from '../sanity';

const Cats = () => {
  
  const [categories,setCategories]=useState([]);

  
  // useEffect(()=>{
  //   client.fetch(`
  //   *[_type=="category"]
  //   `)
  //   .then((data)=>{setCategories(data);});
  //   },[])
  //   console.log(categories);




    useEffect(() => {
      fetch('https://ehe8yni1.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22category%22%5D')
          .then((response) => response.json())
          .then((json) => {
            setCategories(json.result)
          })
          .catch((error) => {
              console.error(error);
          });
  }, []);



  return (
    
<ScrollView horizontal>
  
{categories.map((category)=>
    <Catcard 
    id={category._id}
    key={category._id}

    title={category.name}
    // path={urlFor=(category.image).width(200).url()}
      path={
        `https://cdn.sanity.io/images/ehe8yni1/production/${(category.image.asset._ref).substring((category.image.asset._ref).indexOf("-")+1,(category.image.asset._ref).length-4)}.${category.image.asset._ref.substring(category.image.asset._ref.length-3)}`}
            
            /> 
)
}   
    {/* <Catcard title="dwhjdw"  path={require("../images/logo.jpg")}> </Catcard> */}

</ScrollView>      
  
  )
}

export default Cats;
