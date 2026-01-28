import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function VideoScreen() {
  const video = useRef(null);

  useEffect(() => {
    const loadResumePoint = async () => {
      const saved = await AsyncStorage.getItem('last_video_pos');
      if (saved && video.current) {
        const resumePos = Math.max(0, parseInt(saved) - 10000);
        await video.current.setPositionAsync(resumePos);
      }
    };
    loadResumePoint();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Video
        ref={video}
        style={styles.video}
        source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        onPlaybackStatusUpdate={status => {
          if (status.isLoaded && status.isPlaying) {
            AsyncStorage.setItem('last_video_pos', status.positionMillis.toString());
          }
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  video: { width: '100%', height: '100%' }
});
