import React from 'react';
import { View } from 'react-native';
import { Video } from 'expo-av';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <Video
        style={{ width: '100%', height: '100%' }}
        source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        useNativeControls
        resizeMode="contain"
        shouldPlay
      />
    </View>
  );
}
