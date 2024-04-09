import React from 'react'
import { FlatList } from 'react-native'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'
import { Movie } from '../interfaces/movieInterfaces'
import { MoviePoster } from './MoviePoster'

interface Props{
    title?:string,
    movies:Movie[]
}
export const HorizontalSlider = ({title,movies}:Props) => {
  return (
    <View style={{backgroundColor:'', height:(title)? 260:220}}>
        {(title)? <Text style={styles.headerHorizontal}>{title}</Text> :null}
        <FlatList
          data={movies}
          renderItem={({item}:any)=> (
            <MoviePoster movie={item} height={200} width={120}/>  //what is rendering at this momment
          )}
          keyExtractor={(item)=>item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
       </View>
  )
}

const styles = StyleSheet.create({
    headerHorizontal:{
        color:'black',
        fontSize:20
    }
});