import { useFilms } from "../hooks/useFilms";
import { Link } from "react-router-dom";
import styles from "./FilmList.module.css";

export const FilmList = () => {
  const { films, loading, error } = useFilms();

  // Se estiver carregando
  if (loading) {
    return <div>Loading movies...</div>;
  }

  // Se houver erro
  if (error) {
    return <div>Erro: {error}</div>;
  }

  // Renderizar a lista
  return (
    <div className={styles["film-list"]}>
      <h1>The 10 best Studio Ghibli movies</h1>
      <div className={styles["films-grid"]}>
        {films.map((film) => (
          <Link key={film.id} to={`films/${film.id}`}>
            <div className={styles["film-card"]}>
              <img src={film.image} alt={film.title} />
              <h2>{film.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
