import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import sanityClient from '@sanity/client';
import validator from 'validator';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const client = sanityClient({
  projectId: 'ehe8yni1',
  dataset: 'production',
  apiVersion: '2021-10-21',
  token: 'sky4N0iOMkhbTanZLheYq7h5h9Jr2DfflzuXRVO6ugVIpLZWvKlL4NVyc3RNAslK1eD4TYE8W6DB7IOAUjjrVBHlV2Q2AXRHyRYo9sYKEHhzore511LQTp18k0DgG5hCu5NaOP5havBemCSIbtxt3IhkzRRCL3TLmIIyn7lDyTLoGzCSoW0o',

  useCdn: true,
});

const Login = () => {
const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
    if (!validator.isEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    
      const result = await client.fetch(`*[_type == "user" && email == "${email}"][0]`);
      if (!result) {
        setError('User not found');
        return;
      }

      if (result.password !== password) {
        setError('Incorrect password');
        return;
      }
      const username=result.fullName;

      navigation.navigate('Home',{username});
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    
    <View style={styles.container}>
         <Image
        className="w-48 h-48 mb-6 rounded-full"
        source={require('../images/logo.jpg')}
      />
      <Text className="font-bold mb-7 text-lg">welcome to amir restaurant !</Text>
      {/* <Text className="opacity-70 mb-6"> please Login to start</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity className="bg-violet-600 rounded-3xl w-24 items-center mt-2 " onPress={handleLogin} ><Text className=" mx-1  text-white font-bold text-lg">Login</Text></TouchableOpacity>

      {error && <Text style={styles.error}>{error}</Text>}
      <Button title="register here" onPress={()=>{navigation.navigate("Register")}} />


    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:100
  },
  input: {
    width: '100%',
    height: 40,
    padding: 10,
    marginBottom: 10,
  }})
  export default Login
