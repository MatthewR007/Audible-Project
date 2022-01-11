import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';

function LogoTitle() {
    return (
        <View>
            <Image
                style={{ width: 30, height: 30, marginLeft: 87, marginBottom: -18 }}
                source={{url: 'https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/logo/Audible_Logo_New_Icon._V312762632_.png'}}
            />
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, marginLeft: 24 }}>audible</Text>
        </View>
    );
}

const HomeStack = createStackNavigator();

export default function HomeScreenStack() {
    return (
        <HomeStack.Navigator
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
            <HomeStack.Screen 
                name='audible' 
                component={Home}
                options={{ 
                    headerTitle: (props) => <LogoTitle {...props} />,
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
            {/* <HomeStack.Screen name='Library' component={Library}></HomeStack.Screen> */}
            {/* <HomeStack.Screen name='Discover' component={Discover}></HomeStack.Screen> */}
            {/* <HomeStack.Screen name='Profile' component={Profile}></HomeStack.Screen> */}
            {/* <HomeStack.Screen name='MyTabs' component={MyTabs}></HomeStack.Screen> */}
        </HomeStack.Navigator>
    )
}