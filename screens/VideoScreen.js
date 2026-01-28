import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function VideoScreen() {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  useEffect(() => {
    // অটো-রোটেশন অন করা
    ScreenOrientation.unlockAsync();
    
    const loadAndPlay = async () => {
      const savedPos = await AsyncStorage.getItem('last_video_pos');
      if (savedPos && video.current) {
        const resumePos = Math.max(0, parseInt(savedPos) - 10000);
        await video.current.setPositionAsync(resumePos);
      }
    };
    loadAndPlay();
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
        isLooping
        onPlaybackStatusUpdate={status => {
          setStatus(() => status);
          if (status.isLoaded && status.isPlaying) {
            AsyncStorage.setItem('last_video_pos', status.positionMillis.toString());
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center' },
  video: { width: Dimensions.get('window').width, height: Dimensions.get('window').height * 0.6 }
});
