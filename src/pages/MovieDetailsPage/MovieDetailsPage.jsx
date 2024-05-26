// import { Link, useParams } from "react-router-dom";
// import { toast, Toaster } from "react-hot-toast";
// import { useEffect, useState, useRef } from "react";
// import { getMoviesDetails } from "./../../tmdb-api";
// import Loader from "./../../components/Loader/Loader.jsx";
// import css from "./MovieDetailsPage.module.css";

// export default function MovieDetailsPafe() {
//   const { movieId } = useParams();
//   const [movieDetails, setMovieDetails] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     async function asyncWrapper() {
//       try {
//         setIsLoading(true);
//         const dataOfDetails = await getMoviesDetails(movieId);
//         setMovieDetails(dataOfDetails);
//       } catch (error) {
//         return toast.error("This is an error! Please try again later!");
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     asyncWrapper();
//   }, [movieId]);

//   const defaultImg =
//     "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

//   return (
//     <div>
//       <h3>Details{movieId}</h3>
//       {isLoading && <Loader />}
//       <Link to="">Go back</Link>
//       <div>
//         <img
//           src={
//             movieDetails.poster_path
//               ? `https://image.tmdb.org/t/p/w500 ${movieDetails.poster_path}`
//               : defaultImg
//           }
//           width={250}
//           alt="poster"
//         />
//         <div className={css.description}>
//           <p>{movieDetails.original_title}</p>
//           <p>`User score: ${movieDetails.vote_average}`</p>
//           <p>Overview</p>
//           <p>{movieDetails.overview}</p>
//           <p>Genres</p>
//           <p>{movieDetails.overview}</p>
//         </div>
//       </div>
//       <div>
//         <h3>Additional information</h3>
//       </div>
//       <Toaster position="top-center" reverseOrder={false} />
//     </div>
//   );
// }
