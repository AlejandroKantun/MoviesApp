import React, { useContext, useEffect } from 'react'
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';

interface Props{
    children: JSX.Element|JSX.Element[]
}

export const GradientBackground = ({children}:Props) => {
    //const { opacity, fadeIn, fadeOut } = useFade()
    const { colors, prevColors, setPrevMainColors } = useContext( GradientContext );
   const opacity=1;

    useEffect(() => {
        //fadeIn( () => {
        //setPrevMainColors( colors );
        //fadeOut();
        //})

    }, [ colors ])

  return (
        <View
            style={{flex:1, //backgroundColor:'#084F6A'
        }}
        >
            <LinearGradient
                colors={[prevColors.primary,prevColors.secondary]}
                style={{...StyleSheet.absoluteFillObject}}
                start={{x:0.1,y:0.1}}
                end={{x:0.5,y:0.7}}
            />

            <Animated.View
                style={{...StyleSheet.absoluteFillObject, 
                opacity}}
            >
                <LinearGradient
                colors={[colors.primary,colors.secondary]}
                style={{...StyleSheet.absoluteFillObject}}
                start={{x:0.1,y:0.1}}
                end={{x:0.5,y:0.7}}
            />

            </Animated.View>
            {children}
        </View>
  )
}
