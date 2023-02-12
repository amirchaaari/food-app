import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import sanityClient from '@sanity/client';
import validator from 'validator';
const client = sanityClient({
  projectId: 'ehe8yni1',
  dataset: 'production',
  apiVersion: '2021-10-21',
  token: 'sky4N0iOMkhbTanZLheYq7h5h9Jr2DfflzuXRVO6ugVIpLZWvKlL4NVyc3RNAslK1eD4TYE8W6DB7IOAUjjrVBHlV2Q2AXRHyRYo9sYKEHhzore511LQTp18k0DgG5hCu5NaOP5havBemCSIbtxt3IhkzRRCL3TLmIIyn7lDyTLoGzCSoW0o',

  useCdn: true,
});

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
  
    const handleRegister = async () => {
        try {
    
            if (!validator.isEmail(email)) {
                setError('Please enter a valid email');
                return;
              }
        
              if (!validator.isLength(password, { min: 8 })) {
                setError('Password must be at least 8 characters');
                return;
              }
        
              if (!email || !password || !fullName) {
                setError('All fields are required');
                return;
              }
      
        const userExists = await client.fetch(`*[_type == "user" && email == "${email}"][0]`);
        if (userExists) {
          throw new Error('Email already exists');
        }
        const user = {
          _type: 'user',
          email: email,
          password: password,
          fullName: fullName,
        };
        await client.create(user);
      setSuccess('User successfully created');
      setEmail('');
      setPassword('');
      setFullName('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
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
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={(text) => setFullName(text)}
        value={fullName}
      />
      <Button title="Register" onPress={handleRegister} />
      {error && <Text style={styles.error}>{error}</Text>}
      {success && <Text>{success}</Text>}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    padding: 10,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default Register;
