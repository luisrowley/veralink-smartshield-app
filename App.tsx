import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import ScanScreen from './src/scanner/scanner';

function LoadingView(): JSX.Element {
  return (
    <Text>Loading...</Text>
  );
}

function App(): JSX.Element {
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
