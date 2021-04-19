import axios from "axios"

const apiKey = "262170cbb6ca02ba32c782e4d358e8a0"

const fetchMoviesTrendingApi = async() => {
  try {const responce =  await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
  return responce;}
  catch (error) {
    throw new Error(error)
  }
}

const fetchMoviesDetailsApi = async ({ movieId }) => {
 try {
    const response= await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)

  
  return response;
}catch (error) {
  throw new Error(error)
}
}


const fetchMoviesCreditApi = async({ movieId }) => {
    try {
    const response= await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`)
  
  return response;
}catch (error) {
  throw new Error(error)}
}



const fetchMoviesReviewsApi = async({ movieId }) => {
    try {
    const response= await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`)
  
  return response;
}catch (error) {
  throw new Error(error)}
}



const fetchMoviesSearchApi = async(query = "cat") => {
    try {
    const response= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`)
  return response;
}catch (error) {
  throw new Error(error)}
}



export { fetchMoviesSearchApi, fetchMoviesReviewsApi, fetchMoviesCreditApi, fetchMoviesDetailsApi, fetchMoviesTrendingApi }
