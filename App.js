import React from 'react';
import { View } from 'react-native';
import VideoScreen from './screens/VideoScreen';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <VideoScreen />
    </View>
  );
}
