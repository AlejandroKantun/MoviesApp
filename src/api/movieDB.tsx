import axios from "axios";

const movieDB = axios.create({
        baseURL:'https://api.themoviedb.org/3/movie',
        params:{
            api_key:'f96449fc81459a9605c22f68560e8633',
            language:'es-ES'
        }
})

export default movieDB; 