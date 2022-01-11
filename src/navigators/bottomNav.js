import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreenStack from './homeStack';
import LibraryScreenStack from './libraryStack';
import DiscoverScreenStack from './discoverStack';
import ProfileScreenStack from './profileStack';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
      }}
      tabBarOptions={{
        style: {
          backgroundColor: 'black',
          borderTopColor: 'black',
          height: 88,
          paddingTop: 5,
        },
        activeTintColor: '#FFFFFF',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreenStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreenStack}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bookshelf" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreenStack}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="youtube" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreenStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}