import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Library from '../screens/library';

const LibraryStack = createStackNavigator();

export default function LibraryScreenStack() {
    return (
        <LibraryStack.Navigator
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
            <LibraryStack.Screen 
                name='Library' 
                component={Library}
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
        </LibraryStack.Navigator>
    )
}