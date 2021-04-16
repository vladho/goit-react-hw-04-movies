import axios from "axios";

const apiKey = "262170cbb6ca02ba32c782e4d358e8a0";

const fetchMoviesTrendingApi = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
  );
};

const fetchMoviesDetailsApi = ({ movieId }) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
  );
};

const fetchMoviesCreditApi = ({ movieId }) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
  );
};

const fetchMoviesReviewsApi = ({ movieId }) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`
  );
};

const fetchMoviesSearchApi = (query = "cat") => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`
  );
};

export {
  fetchMoviesSearchApi,
  fetchMoviesReviewsApi,
  fetchMoviesCreditApi,
  fetchMoviesDetailsApi,
  fetchMoviesTrendingApi,
};
