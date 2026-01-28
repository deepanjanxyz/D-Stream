import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import VideoScreen from './screens/VideoScreen';
import MusicScreen from './screens/MusicScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: '#000', height: 65, borderTopWidth: 0 },
          tabBarActiveTintColor: '#32CD32',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ color, size }) => {
            let iconName = route.name === 'Video' ? 'play-circle' : 
                           route.name === 'Music' ? 'musical-notes' : 'person';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Video" component={VideoScreen} />
        <Tab.Screen name="Music" component={MusicScreen} />
        <Tab.Screen name="Me" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
        }

