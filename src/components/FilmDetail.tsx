import { useParams, useNavigate } from "react-router-dom";
import { useFilms } from "../hooks/useFilms";
import styles from "./FilmDetail.module.css";

export const FilmDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { films, loading, error } = useFilms();

  // Encontrar o filme pelo ID
  const film = films.find((f) => f.id === id);

  // Estados de loading/erro
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Erro: {error}</div>;
  if (!film) return <div>Filme não encontrado</div>;

  return (
    <div className={styles["film-detail"]}>
      <button onClick={() => navigate("/")}>← Back</button>

      <img src={film.movie_banner} alt={film.title} className={styles.banner} />

      <div className={styles.info}>
        <h1>{film.title}</h1>
        <p className={styles.description}>{film.description}</p>

        <div className={styles.details}>
          <p>
            <strong>Director:</strong> {film.director}
          </p>
          <p>
            <strong>Producer:</strong> {film.producer}
          </p>
          <p>
            <strong>Release Date:</strong> {film.release_date}
          </p>
          <p>
            <strong>Running Time:</strong> {film.running_time} minutes
          </p>
          <p>
            <strong>Rotten Tomatoes:</strong> {film.rt_score}%
          </p>
        </div>
      </div>
    </div>
  );
};
