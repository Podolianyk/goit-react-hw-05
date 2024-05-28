import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzJlOGFlMGUxNjJhZWE4N2I1M2FlMDdmNWQ3ZDg0OCIsInN1YiI6IjY2NTMzMDNiYmNiYzdhMmUyYWIzZWM3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wvmdZ_6Ilxs-bJQGq8szfwi22wQWMFQZt5QGfCP7eGI`,
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get("trending/movie/day", options);
  return response.data.results;
};

export const getsearchMovie = async (query) => {
  const response = await axios.get("search/movie", {
    params: {
      query: query,
    },
    ...options,
  });
  return response.data.results;
};

export const getMoviesDetails = async (movieId) => {
  const response = await axios.get(`movie/${movieId}`, options);
  return response.data;
};

export const getMoviesCast = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/credits`, options);
  return response.data;
};

export const getMoviesReviews = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/reviews`, options);
  return response.data;
};
