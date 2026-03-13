import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FilmList } from "./components/FilmList";
import { FilmDetail } from "./components/FilmDetail";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<FilmList />} />
        <Route path="films/:id" element={<FilmDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
