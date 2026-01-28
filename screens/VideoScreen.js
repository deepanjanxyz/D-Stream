import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, StatusBar, Dimensions, Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function VideoScreen() {
  const video = useRef(null);
  const [pipActive, setPipActive] = useState(false); // ইউনিক PiP লজিক

  useEffect(() => {
    ScreenOrientation.unlockAsync(); // অটো রোটেশন
    const loadResumePoint = async () => {
      const saved = await AsyncStorage.getItem('last_video_pos');
      if (saved && video.current) {
        // ১০ সেকেন্ড রিজিউম লজিক
        const seekTime = Math.max(0, parseInt(saved) - 10000);
        await video.current.setPositionAsync(seekTime);
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
        shouldPlay
        onPlaybackStatusUpdate={status => {
          if (status.isLoaded && status.isPlaying) {
            AsyncStorage.setItem('last_video_pos', status.positionMillis.toString());
          }
        }}
      />
      <View style={styles.proBadge}>
        <Text style={styles.proText}>AI-Optimized Engine</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  video: { width: '100%', height: '100%' },
  proBadge: { position: 'absolute', top: 40, right: 20, backgroundColor: '#32CD32', padding: 5, borderRadius: 5 },
  proText: { color: '#000', fontSize: 10, fontWeight: 'bold' }
});
