import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Discover from '../screens/discover';

const DiscoverStack = createStackNavigator();

export default function DiscoverScreenStack() {
    return (
        <DiscoverStack.Navigator
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
            <DiscoverStack.Screen 
                name='Discover' 
                component={Discover}
                options={{
                    headerRight: () => (
                        <Button 
                            onPress={() => alert('This is a button!')}
                            color="#FFFFFF"
                            type="clear"
                            icon={
                                <Icon
                                    name="search"
                                    size={20}
                                    color="white"
                                />
                            }
                        />
                    ),
                }}
            />
        </DiscoverStack.Navigator>
    )
}