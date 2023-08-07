import Clipboard from '@react-native-community/clipboard';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Linking } from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { VALIDATION_SERVER } from "@env";


const VerifyScreen = ({ navigation }: any) => {
  const [inputText, setInputText] = useState('');

  const handlePasteFromClipboard = async () => {
    const clipboardContent = await Clipboard.getString();
    setInputText(clipboardContent);
  };

  const validateURL = async () => {
    const validationServer = `${VALIDATION_SERVER}/verify`; // move to env file
    const fullUrl = `${validationServer}?url=${encodeURIComponent(inputText)}`;
  
    try {
      const response = await axios.get(fullUrl);
      // Process the response data
      if (response.data.urlToRedirect) {
        console.log(response.data);
        const externalUrl = response.data.urlToRedirect;
        Linking.openURL(externalUrl);
      }
    } catch (error: any) {
      // Handle error cases
      if (error.response.status) {
        navigation.navigate('Warning');
      }
      // console.error(error);
    }
  };


  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={text => setInputText(text)}
          placeholder="Enter text"
        />
        <TouchableOpacity style={styles.button} onPress={handlePasteFromClipboard}>
          <Icon name="paste" size={30} color="#006" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={validateURL}>
          <Text>Check URL!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'lightblue',
  },
});

export default VerifyScreen;