'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanScreen extends Component<{navigation: any}, { ws: WebSocket }>  {
  constructor(props: any) {
    super(props);

    this.state = {
      ws: new WebSocket('ws://192.168.0.38:8999'),
    };
  }

  componentDidMount() {
    this.state.ws.onopen = () => {
      console.log('WebSocket connection opened');
      //this.setState({ ws: this.ws });
    };

    this.state.ws.onmessage = (event) => {
      console.log('Received message:', event.data);
      // Process the received message if needed
    };

    this.state.ws.onclose = () => {
      console.log("closed");
    };

    this.state.ws.onerror = (error) => {
      console.log('WebSocket error:', error);
      // Handle WebSocket error
    };
  }

  componentWillUnmount() {
    console.log("closing websocket...");
    this.state.ws.close();
  }

  onSuccess = (e: any) => {
    if (this.state.ws) {
      const data = JSON.stringify({ uid: e.data });
      console.log('Message sent:', data);
      this.state.ws.send(data);
    }
  };

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        reactivate={true}
        reactivateTimeout={800}
        topContent={
          <Text style={styles.centerText}>Scan any QR Code from 
            <Text style={styles.textBold}> bridge.veralink.es </Text>
          </Text>
        }
        bottomContent={
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={() => this.props.navigation.navigate('Verify')}
          >
            <Text style={styles.buttonText}>Or enter manually</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default ScanScreen;
