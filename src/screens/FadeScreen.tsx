import React, { useRef } from 'react'
import { View,Text, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {
    const {fadeIn,fadeOut,opacity} =useFade(0,0.5,150);

    return (
    <View
        style={{
            flex:1,
            backgroundColor:'grey',
            justifyContent:'center',
            alignItems:'center'
        }}>
        <Animated.View style={{
            backgroundColor:'#084F6A',
            width:150,
            height:150,
            borderColor:'white',
            borderWidth:10,
            opacity:opacity
        }}
        >
        
        </Animated.View>
        <Button
            title='start fadeIn'
            onPress={()=>fadeIn()}
        />
         <Button
            title='start fadeOut'
            onPress={()=>fadeOut()}
        />
    </View>
  )
}
