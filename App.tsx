import React, { useEffect } from 'react';
import {
  Alert,
  Linking,
  StyleSheet,
  Text
} from 'react-native';
import ScanScreen from './src/screens/scanner/scanner';

function LoadingView(): JSX.Element {
  return (
    <Text>Loading...</Text>
  );
}

const handleSharedUrl = async (url: string) => {
  console.log('Received URL:', url);
  // await processSharedUrl(sharedUrl);
};

function App(): JSX.Element {
  useEffect(() => {
    const initialUrlHandler = async () => {
      const url = await Linking.getInitialURL();
      if (url) {
        handleSharedUrl(url);
      }
    };

    const deepLinkListener = Linking.addEventListener('url', (event) => {
      handleSharedUrl(event.url);
    });

    initialUrlHandler();

    return () => {
      deepLinkListener.remove();
    };
  }, []);
  
  return (
    <ScanScreen/>
  );
}

const styles = StyleSheet.create({
  barcodeTextURL: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'red',
  },
});

export default App;
