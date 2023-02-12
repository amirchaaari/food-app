import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import Footr from '../components/footr';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Checkout from './checkout';
export var cartList = [];

const Cart = () => {
  const [cart, setCart] = useState(cartList);
  const cartListForCheckout=cart;

  const increaseItemQuantity = (itemId) => {
    setCart(cart.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    }));
  };

  const decreaseItemQuantity = (itemId) => {
    <Text>My cart</Text>
    setCart(cart.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1
        };
      }
      return item;
    }));
  };

  const removeItemFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
        cartList=cartList.filter(item => item.id !== itemId);

  };

  const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const navigation= useNavigation();

  return (
    <View className="flex-1 ">
    <ScrollView className="mb-20">
    <View className="p-2">
    
      {cart.map(item => (
        <View key={item.id} className=" bg-white p-2" style={styles.itemContainer}>
          <Image
            source={{ uri: item.path }}
            style={styles.itemImage}
          />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>{item.name}</Text>
            <View className="flex-row">
            <TouchableOpacity className=" mr-2 items-center w-8 h-8 bg-orange-400 justify-center rounded-lg" onPress={() => decreaseItemQuantity(item.id)} ><Text className="font-bold text-white text-2xl	">-</Text></TouchableOpacity>

            <Text >Quantity: {item.quantity}</Text>

            <TouchableOpacity  className="ml-2 items-center w-8 h-8 bg-orange-400 justify-center rounded-lg" onPress={() => increaseItemQuantity(item.id)} ><Text className="font-bold text-white text-2xl	">+</Text></TouchableOpacity>
            <Text className="font-semibold ml-10" >{item.price} DT</Text>

            </View>

            <View style={styles.itemButtons}>
              <Button title="remove from cart" onPress={() => removeItemFromCart(item.id)} />
            </View>
          </View>
        </View>
      ))}

  
    </View>
    <View className="flex-row">
    <Text className=" ml-4 font-bold text-lg">Total:</Text><Text className=" ml-64 font-bold text-lg">{total} DT</Text></View>

    {total !== 0 && (
        <TouchableOpacity onPress={() => navigation.navigate("Checkout",{total,cartListForCheckout})} className="bg-orange-400 rounded-3xl w-52 items-center mt-2 ml-20"  ><Text className=" mx-1  text-white font-bold text-lg">checkout</Text></TouchableOpacity>
        )}
        </ScrollView>
        
    <Footr></Footr>

    
    </View>
  );
};

const styles = StyleSheet.create({

  itemContainer: {
    flexDirection: 'row',
    marginVertical: 10
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  itemDetails: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: 'space-between'
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemPrice: {
    fontSize: 16
}});
export default Cart;



