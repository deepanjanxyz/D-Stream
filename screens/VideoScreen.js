import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function VideoScreen() {
  useEffect(() => {
    Audio.setAudioModeAsync({
      staysActiveInBackground: true,
      shouldDuckAndroid: true,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>D-STREAM VIDEO</Text>
      <Text style={{color: '#fff'}}>তোর খতরনাক ভিডিও কার্ডগুলো এখানে আসবে...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20, paddingTop: 50 },
  header: { color: '#32CD32', fontSize: 24, fontWeight: 'bold' },
});
