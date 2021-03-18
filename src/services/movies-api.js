import axios from "axios";
const apiKey = "262170cbb6ca02ba32c782e4d358e8a0";

const fetchMoviesTrendingApi = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
  );
};

export { fetchMoviesTrendingApi };

// const movieId = 630004;

const fetchMoviesDetailsApi = ({ movieId }) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
  );
};

export { fetchMoviesDetailsApi };

// const fetchMoviesImageApi = () => {
//   return axios.get(
//     `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}&language=en-US`
//   );
// };

// export { fetchMoviesImageApi };