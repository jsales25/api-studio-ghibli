import { useEffect, useState } from "react";
import type { Film } from "../types/film";

export const useFilms = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        // 1. Buscar dados da API
        const response = await fetch("https://ghibliapi.vercel.app/films");

        // 2. Validar se a resposta foi ok
        if (!response.ok) {
          throw new Error("Erro ao buscar filmes");
        }

        // 3. Converter para JSON (dados do tipo Film[])
        const data: Film[] = await response.json();

        // 4. Ordenar alfabeticamente
        const sorted = data.sort((a, b) => a.title.localeCompare(b.title));

        // 5. Pegar apenas os 10 primeiros
        const topTen = sorted.slice(0, 10);

        // 6. Guardar no estado
        setFilms(topTen);
      } catch (err) {
        // Se houver erro, guardar a mensagem
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        // Quando tudo terminar (sucesso ou erro), setLoading em false
        setLoading(false);
      }
    };

    fetchFilms();
  }, []); // [] = executa apenas 1 vez, quando o componente montar

  return { films, loading, error };
};
