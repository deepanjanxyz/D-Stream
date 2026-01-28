import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VideoScreen from './screens/VideoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#000' } }}>
        <Tab.Screen name="Video" component={VideoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
