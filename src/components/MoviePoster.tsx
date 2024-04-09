import React from 'react'
import { View,Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core'
import { Movie } from '../interfaces/movieInterfaces';

interface Props{
    movie:Movie;
    height?:number;
    width?:number;
}

export const MoviePoster = ({movie,height=420,width=300}:Props) => {
    const FullPosterUri=`https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    
    const navigation=useNavigation();

  return (
    <TouchableOpacity 
        onPress={()=>navigation.navigate('DetailScreen' as never ,movie as never)}
        activeOpacity={0.8}
        style={{
        height:height,
        width:width,
        marginHorizontal:2,
        paddingBottom:20,
        paddingHorizontal:7
    }}>
        <View style={styles.viewPosterContainer}>
            <Image
            style={styles.posterImage}
            source={{
                uri:FullPosterUri
            }}
        />
        </View>
        
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    posterImage:{
        flex:1,
        borderRadius:18,
    },
    viewPosterContainer:{
        flex:1,
        borderRadius:18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
    },
    viewMainContainer:{
        width:300,
        height:420,
    }
});