import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/profile';

const ProfileStack = createStackNavigator();

export default function ProfileScreenStack() {
    return (
        <ProfileStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#242424',
                    borderBottomColor: '#242424',
                    borderBottomWidth: 20,
                },
                headerTintColor: '#000000',
                headerTitleStyle: {
                    color: '#FFFFFF',
                }
            }}
        >
            <ProfileStack.Screen name='Profile' component={Profile}></ProfileStack.Screen>
        </ProfileStack.Navigator>
    )
}