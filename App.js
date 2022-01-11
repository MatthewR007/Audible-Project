import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/navigators/bottomNav';

export default function App() {

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}