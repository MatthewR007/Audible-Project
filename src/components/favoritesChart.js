import React from 'react';
import { View, Image } from 'react-native';

export const FavoritesChart = () => {
    return (
        <View 
            style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginHorizontal: 12,
            marginTop: 8,
            }}
        >
  
            <Image 
            style={{ 
                width: 186, 
                height: 100,
                borderRadius: 10,
                marginBottom: 18,
            }}
            source={require('../../assets/mystery-bg.png')}
            />
            <Image 
            style={{ 
                width: 186, 
                height: 100,
                borderRadius: 10,
                marginBottom: 18,
            }} 
            source={require('../../assets/romance-bg.jpg')}
            />
            <Image 
            style={{ 
                width: 186, 
                height: 100,
                borderRadius: 10,
                marginBottom: 18,
            }} 
            source={require('../../assets/fiction-bg.jpg')}
            />
            <Image 
            style={{ 
                width: 186, 
                height: 100,
                borderRadius: 10,
                marginBottom: 18,
            }} 
            source={require('../../assets/relationship-bg.jpg')}
            />
  
        </View>
    );
  };