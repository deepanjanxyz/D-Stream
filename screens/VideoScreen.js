import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function VideoScreen() {
  const [lastPosition, setLastPosition] = useState(0);

  // ১০ সেকেন্ড রিজিউম লজিক
  const handlePlaybackStatusUpdate = async (status) => {
    if (status.isLoaded && status.isPlaying) {
      await AsyncStorage.setItem('last_video_pos', status.positionMillis.toString());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.neonTitle}>D-STREAM VIDEO</Text>
      <View style={styles.videoCard}>
        <Text style={{color: '#fff'}}>ভিডিও প্লেয়ার লোড হচ্ছে...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20, paddingTop: 50 },
  neonTitle: { color: '#32CD32', fontSize: 26, fontWeight: 'bold', textShadowColor: '#32CD32', textShadowRadius: 10 },
  videoCard: { width: '100%', height: 200, backgroundColor: '#1A1A1A', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginTop: 20 }
});
