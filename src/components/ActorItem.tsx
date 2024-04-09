import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props{
    actor:Cast
}

export const ActorItem = ( {actor}:Props) => {
    const FullPosterUri=`https://image.tmdb.org/t/p/w500/${actor.profile_path}`

    return (
        <View>
            <View style={styles.viewMainContainer}>
                {
                    actor.profile_path &&(
                        <Image
                        style={styles.posterImage}
                            source={{
                            uri:FullPosterUri
                        }}/>
                    )
                }
                
                <View style={styles.actorInfo}>
                    <Text style ={{color:'black', fontSize:18, fontWeight:'bold'}}> {actor.name}</Text>
                    <Text style ={{color:'black', fontSize:16, opacity:0.7}}> {actor.character}</Text>
                </View>
            </View> 
        </View>
    )
}


const styles = StyleSheet.create({
    posterImage:{
        borderRadius:8,
        width:70,
        height:70,
    },

    viewMainContainer:{
        flexDirection:'row',
        backgroundColor:'white',
        height:70,
        borderRadius:8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 20,
        elevation: 3,
        marginRight:10,
        justifyContent:'center',
        alignItems:'center'
    },
    actorInfo:{
        justifyContent:'center',
        marginLeft:10,
        paddingRight:10,
        
    }
});