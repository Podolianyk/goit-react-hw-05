import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ data }) {
  return (
    <ul className={css.list}>
      {data.map((movie) => (
        <li key={movie.id} className={css.item}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}
