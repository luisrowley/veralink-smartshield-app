'use strict';

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

function ScanScreen(): JSX.Element {
  const [websocket, setWebsocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket('ws://192.168.0.38:8999');
    
    ws.onopen = () => {
      console.log('WebSocket connection opened');
      setWebsocket(ws);
    };
    
    ws.onmessage = (event) => {
      console.log('Received message:', event.data);
      // Process the received message if needed
    };
    
    ws.onerror = (error) => {
      console.log('WebSocket error:', error);
      // Handle WebSocket error
    };
    
    return () => {
      // Clean up the WebSocket connection
      ws.close();
    };
  }, []);

  const onSuccess = (e: { data: string }) => {
    if (websocket) {
      // Send WebSocket message to the server
      const wsData = JSON.stringify({ "uid": e.data });
      console.log('Message sent:', wsData);
      websocket.send(wsData);
    }
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      topContent={
        <Text style={styles.centerText}>
          Go to{' '}
          <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
          your computer and scan the QR code.
        </Text>
      }
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>OK. Got it!</Text>
        </TouchableOpacity>
      }
    />
  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default ScanScreen;