import React from 'react'
import { FlatList, Text } from 'react-native';
import { View } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterfaces';
import currencyformatter from 'currency-formatter';
import { ActorItem } from './ActorItem';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props{
    movieFull:MovieFull,
    cast:Cast[]
}

export const MovieDetails = ({movieFull,cast}:Props) => {
    //var currencyFormatter = require('currency-formatter');

  return (
    <View style={{marginHorizontal:20}}>
        <View style={{flexDirection:'row', marginTop:4}}>
            <Text style={{color:'black'}}>
            
                <Icon
                    size={16}
                    name='star-outline'
                    color='grey'
                />
             </Text>
            <Text style={{color:'black'}}> {movieFull.vote_average}</Text>
            <Text style ={{ color:'black', marginLeft:5}}> -{movieFull.genres.map(g=>g.name).join(', ')}</Text>
        </View>
        <View>
            <Text style={{color:'black', fontSize:23,marginTop:8, fontWeight:'bold'}} > Historia</Text>
        </View>
        <Text style={{color:'black', fontSize:16 }} >
            {movieFull.overview}
        </Text>
        <View>
            <Text style={{color:'black', fontSize:23,marginTop:8, fontWeight:'bold'}} > Presupuesto </Text>
        </View>
        <Text style={{color:'black', fontSize:18 }} >
            {
                currencyformatter.format(movieFull.budget,{code:'USD'})
            }
        </Text>
        {/* CASTING */}
        <View style={{marginTop:10,marginBottom:100}}>
            <Text style={{color:'black', fontSize:23,marginTop:8, fontWeight:'bold', marginHorizontal:20}} > Actores</Text>
            
            <FlatList
                data={cast}
                renderItem={({item}:any)=> (
                    <ActorItem actor={item} />  //what is rendering at this momment
                )}
                keyExtractor={(item)=>item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{
                    marginTop:10,
                    height:75
                }}
            />
       
        </View>
    </View>
  )
}
