import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VideoScreen from './screens/VideoScreen';
import MusicScreen from './screens/MusicScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Video" component={VideoScreen} />
        <Tab.Screen name="Music" component={MusicScreen} />
        <Tab.Screen name="Me" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
