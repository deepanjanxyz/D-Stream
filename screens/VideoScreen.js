import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Video } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function VideoScreen() {
  const video = useRef(null);

  useEffect(() => {
    const loadLastPos = async () => {
      const savedPos = await AsyncStorage.getItem('last_video_pos');
      if (savedPos && video.current) {
        // ১০ সেকেন্ড আগে থেকে শুরু
        const resumePos = Math.max(0, parseInt(savedPos) - 10000);
        await video.current.setPositionAsync(resumePos);
      }
    };
    loadLastPos();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Video
        ref={video}
        style={styles.video}
        source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => {
          if (status.isLoaded) {
            AsyncStorage.setItem('last_video_pos', status.positionMillis.toString());
          }
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  video: { alignSelf: 'center', width: '100%', height: '100%' }
});
