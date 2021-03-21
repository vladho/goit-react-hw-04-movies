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

const fetchMoviesCreditApi = ({ movieId }) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
  );
};

export { fetchMoviesCreditApi };

const fetchMoviesReviewsApi = ({ movieId }) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`
  );
};
export { fetchMoviesReviewsApi };

const fetchMoviesSearchApi = (query = "cat") => {
  // console.log(query);
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`
  );
};

export { fetchMoviesSearchApi };

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

// const fetchMoviesImageApi = () => {
//   return axios.get(
//     `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}&language=en-US`
//   );
// };

// export { fetchMoviesImageApi };
