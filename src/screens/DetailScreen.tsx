import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParams } from '../navigation/NavigationStack';
import { Movie } from '../interfaces/movieInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const screenHeight=Dimensions.get('screen').height;
const {width:windowWidth}=Dimensions.get('window'); //extracting window "with" and renaming it to windowWidth

//StackScreenProps<RootStackParams,any> <Types for arguments common defined on , name of the screen>
interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{}

export const DetailScreen = ({route,navigation}:Props) => {
  const movie= route.params;
  const FullPosterUri=`https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  
  const {isLoading,movieFull,cast}= useMovieDetails(movie.id);
  const {top} = useSafeAreaInsets();

  console.log(movie.title);
  return (
    <ScrollView style={{paddingTop:top}}>
      <View>

        <View style={styles.viewMainContainer}>
          <View style={styles.viewPosterContainer}>
              <Image
              style={styles.posterImage}
              source={{
                  uri:FullPosterUri
              }}
          />
          </View>
        </View>
    </View>
    <View style={styles.marginContainer}>
      <Text style={styles.title}>{movie.title}</Text> 
    </View> 
    {
        isLoading 
        ?<ActivityIndicator size={35} color={'grey'}/>
        :<MovieDetails movieFull={movieFull!} cast={cast!}/>
      }
      {/* Buttom to return */}
      <TouchableOpacity style={styles.backButton}
      onPress={()=>navigation.pop()}>
        <Icon
          name='arrow-back-outline'
          size={45}
          color='white'
          
        />
      </TouchableOpacity>
      
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  posterImage:{
      flex:1,
  },
  viewMainContainer:{
      width:'100%',
      height:screenHeight*0.7,      
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,
      elevation: 9,
      borderBottomEndRadius:25,
      borderBottomStartRadius:25,
      borderTopEndRadius:25,
      borderTopStartRadius:25,
  },
  viewPosterContainer:{
    flex:1,
    overflow:'hidden',
    borderBottomEndRadius:25,
    borderBottomStartRadius:25,
    borderTopEndRadius:25,
    borderTopStartRadius:25,
  },
  marginContainer:{
    marginHorizontal:20,
    marginTop:20
  },
  subtitle:{
    fontSize:16,
    color:'black',
    opacity:0.8,
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    color:'black'

  },
  backButton:{
    position:'absolute',
    zIndex:999,
    elevation:9,
    top:20,
    lef:5
  }
});