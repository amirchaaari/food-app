import React, { useState } from 'react';
import { View, Text, Image, Button, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { cartList } from './cart';
import Footr from '../components/footr';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Details = () => {
  const showAlert = () => {
    Alert.alert(
      'item already exits',
      'the item you are trying to add already exists',
      [
      
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };
  // const [cart, setCart] = useState([]);
  // const { setCart } = useContext(CartContext);

  const route = useRoute();
  const name = route.params.name;
  const description = route.params.description;

  const price = route.params.price;
  const path = route.params.path;
  const id = route.params.id;
  const di = route.params.id;
// const c=[];
  const a= cartList.map((item) => (item.id)) 

  const isIdInArray = a.includes(di);
  // console.log(isIdInArray)
  // console.log(cartList)
  console.log(cartList.map((item) => (item.id)) .includes(di))


    // console.log(a);

   async function handleAddToCart()  {if (!cartList.map((item) => (item.id)) .includes(di)){

     cartList.push({ name:name, price:price, path:path, id:id,quantity:1 });}
    else (showAlert())
  };

  return (
    <View className="flex-1">
      <View className="items-center mt-14">
      <Text className="font-bold text-lg mb-4">{name}</Text>

        <Image
          className="h-80 w-80 rounded-full"
          source={{ uri: path }}
        />
        <Text className="font-bold text-lg mt-4">prix: {price} DT</Text>
        <Text className="mt-2">{description}</Text>
      
      <TouchableOpacity className="bg-orange-400 rounded-3xl w-52 items-center mt-2 " onPress={handleAddToCart} ><Text className=" mx-1  text-white font-bold text-lg">add to cart</Text></TouchableOpacity>
      </View>
      <Footr></Footr>
    </View>
  );
};

export default Details;
