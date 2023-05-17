import React, { useState } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

import { Camera, useCameraDevices } from 'react-native-vision-camera';

function LoadingView(): JSX.Element {
  return (
    <Text>Loading...</Text>
  );
}

function App(): JSX.Element {
  const devices = useCameraDevices('wide-angle-camera')
  const device = devices.back

  if (device == null) return <LoadingView />
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}

      isActive={true}
    />
  )
}

export default App;
