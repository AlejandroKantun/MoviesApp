import React, { useContext, useEffect, useState } from 'react'
import { Dimensions, ScrollView, Text } from 'react-native';
import { ActivityIndicator, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-reanimated-carousel';
import { GradientBackground } from '../components/GradientBackground';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { getArrayColor } from '../helpers/colorHelper';
import { GradientContext } from '../context/GradientContext';

const {width:windowWidth}=Dimensions.get('window'); //extracting window "with" and renaming it to windowWidth


export const HomeScreen = () => {


  const {nowPlaying,popularMovies,topRatedMovies,upcomingMovies,moviesNowIsLoading } = useMovies();
  const {top}= useSafeAreaInsets(); //to extract safe area for IOS
  const {setMainColors} = useContext(GradientContext)
 
  const getPosterColors = async (index:number)=>{
      
      const movie= nowPlaying[index]
      const FullPosterUri=`https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      const [primary = 'green', secondary = 'orange'] = await getArrayColor(FullPosterUri);
      console.log(primary,secondary);
      setMainColors({primary,secondary});
    }

  useEffect(() => {
      if (nowPlaying.length>0){
        console.log('NOW PLAYING HAS');
        getPosterColors(0);
      }
    }, [nowPlaying])

  
  
  if(moviesNowIsLoading){
    //console.log(moviesNowPlaying);
    return(
      <View style={{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
      }}>
      <ActivityIndicator color='red' size={100} />
      </View>
    )
  }

  return (
    <GradientBackground >
        <ScrollView>
              <View style={{marginTop:top+20}}>
              {/*Main Carousel*/}
              <View
              style={{
                height:440,
                width:windowWidth,
                alignItems:'center'
              }}
                >
                  <Carousel
                        loop
                        width={300} //separation between
                        height={700}

                        style={{
                          width: windowWidth * 0.75,
                       }}
                        modeConfig={{
                          parallaxScrollingScale: 1,
                          parallaxScrollingOffset: 12,
                        }}
                        autoPlay={false}
                        mode="parallax"
                        data={nowPlaying}
                        scrollAnimationDuration={200}
                        onSnapToItem={(index) => {
                          //console.log('current index:', index)
                          getPosterColors(index)
                        }}
                        renderItem={({ index }) => ( <MoviePoster movie={nowPlaying[index]}
                          
                          />
                        )}
                    />
              
              </View>
              {/*FlatList peliculas populares*/}
              <HorizontalSlider title='Popular' movies={popularMovies}/>
              <HorizontalSlider title='Top Rated' movies={topRatedMovies}/>
              <HorizontalSlider title='Upcoming' movies={upcomingMovies}/>
            </View>
          </ScrollView>
    </GradientBackground>
   
   ) 
}
