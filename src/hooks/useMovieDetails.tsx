import { useEffect, useState } from "react"
import movieDB from '../api/movieDB';
import { Cast, CreditsResponse } from "../interfaces/creditsInterface";
import { MovieFull } from '../interfaces/movieInterfaces';

interface MovieDetails{
    isLoading:boolean,
    movieFull?:MovieFull
    cast?:Cast []
}

export const useMovieDetails=(movieId:number)=>{
    const [state, setState] = useState<MovieDetails>({
        isLoading:true,
        movieFull:undefined,
        cast:[]    
    });

    const getMovieDetails= async() =>{
        const movieFullPromise = await movieDB.get<MovieFull>(`/${movieId}`);
        const castMoviePromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`);

        
        const [movieDetailsResponse,castMoviesResponse] = await Promise.all([
                movieFullPromise,
                castMoviePromise,
            ]);
        
        setState({
            isLoading:false,
            movieFull:movieFullPromise.data,
            cast:castMoviesResponse.data.cast
        })

    }

   
    useEffect(() => {
        getMovieDetails();
    }, [])
    
    return{
        ...state
    }
}

