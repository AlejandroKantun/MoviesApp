import {useEffect, useState } from "react"

import movieDB from "../api/movieDB";
import { Movie, MovieDBResponse } from '../interfaces/movieInterfaces';

interface MovieState{
    nowPlaying:Movie[],
    popularMovies:Movie[],
    topRatedMovies:Movie[],
    upcomingMovies:Movie[],

}
export const useMovies = () => {
    
    const [moviesNowIsLoading, setMoviesNowIsPlaying] = useState(true)
    const [moviesState, setMoviesState] = useState<MovieState>({
        nowPlaying:[],
        popularMovies:[],
        topRatedMovies:[],
        upcomingMovies:[],
    })

    //
    const getMovies=async()=>{

      const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
      const porpularPromise   = movieDB.get<MovieDBResponse>('/popular');
      const topRatedPromise   = movieDB.get<MovieDBResponse>('/top_rated');
      const upcomingPromise   = movieDB.get<MovieDBResponse>('/upcoming');

      //Promise all dispara de manera simultanea las siguientes promesas
      const response = await Promise.all([
        nowPlayingPromise, 
        porpularPromise,
        topRatedPromise,   
        upcomingPromise   
      ]);

      setMoviesState({
        nowPlaying:response[0].data.results,
        popularMovies:response[1].data.results,
        topRatedMovies:response[2].data.results,
        upcomingMovies:response[3].data.results,
      })
        
      setMoviesNowIsPlaying(false);
    }
    useEffect(() => {
        //moviews playing in theaters
      getMovies();
    }, [])
    
  return {
    ...moviesState,
    moviesNowIsLoading,
  } 
}
