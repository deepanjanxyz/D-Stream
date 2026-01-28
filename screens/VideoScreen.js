import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function VideoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>D-Stream Video Player Ready</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' },
  text: { color: '#32CD32', fontSize: 20, fontWeight: 'bold' }
});
