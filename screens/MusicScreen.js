import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MusicScreen() {
  const songs = [
    { id: '1', title: 'Sweet Hindi Melodies', artist: 'Trending' },
    { id: '2', title: 'Late Night Vibes', artist: 'Relaxing' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>D-Music</Text>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.songItem}>
            <Ionicons name="musical-note" size={24} color="#32CD32" />
            <View style={{marginLeft: 15}}>
              <Text style={{color: '#fff', fontSize: 16}}>{item.title}</Text>
              <Text style={{color: 'gray', fontSize: 12}}>{item.artist}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20, paddingTop: 50 },
  header: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  songItem: { flexDirection: 'row', backgroundColor: '#111', padding: 15, borderRadius: 10, marginBottom: 10, alignItems: 'center' }
});
