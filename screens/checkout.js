import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import fetch from 'node-fetch';
import { useRoute } from '@react-navigation/native';

const apiEndpoint = 'https://ehe8yni1.api.sanity.io/v2021-06-07/data/mutate/production';

const Checkout = () => {
  
  const route = useRoute();
  const cartList = route.params.cartListForCheckout;
  const totale=route.params.total;


  const itemsPurchased = cartList.map(item => ({
   name: item.name,
    quantity: item.quantity,
  }));
  


  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [gouvernerat, setGouvernerat] = useState('');



  const [orderPlaced, setOrderPlaced] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [total, setTotal] = useState(totale.toString());

  

  const handlePlaceOrder = async () => {
    setErrorMessage('');

    if (!address || !phoneNumber) {
      setErrorMessage('Address and Phone Number are required to place an order');
      return;
    }

    const requestBody = {
      mutations: [
        {
          create: {
            _type: 'orders',
            address,
            phoneNumber,
            total,
            gouvernerat,
            nom,
            prenom,
            itemsPurchased:itemsPurchased,

          }
        }
      ]
    };

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer sky4N0iOMkhbTanZLheYq7h5h9Jr2DfflzuXRVO6ugVIpLZWvKlL4NVyc3RNAslK1eD4TYE8W6DB7IOAUjjrVBHlV2Q2AXRHyRYo9sYKEHhzore511LQTp18k0DgG5hCu5NaOP5havBemCSIbtxt3IhkzRRCL3TLmIIyn7lDyTLoGzCSoW0o'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error('Failed to place order');
      }

      setOrderPlaced(true);
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to place order');
    }
  };

  return (
    <View style={styles.container}>
      {orderPlaced ? (
        <Text style={styles.successMessage}>Order placed successfully!</Text>
      ) : (
        <>
              <TextInput
            placeholder="nom"
            value={nom}
            onChangeText={setNom}
            style={styles.textInput}
          />
              <TextInput
            placeholder="Prenom"
            value={prenom}
            onChangeText={setPrenom}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
            style={styles.textInput}
          />
                <TextInput
            placeholder="gouvernerat"
            value={gouvernerat}
            onChangeText={setGouvernerat}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={styles.textInput}
          />
            <Text
            value={total}
  
          />
          <Button onPress={handlePlaceOrder} title="Place Order" />
          {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        </>
        
      )}
      
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10
  },
  orderPlacedContainer: {
    flex: 1,
    
  }});
export default Checkout;


