import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";
import PeliculaCrear from "../../componentes/peliculas/PeliculaCrear";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="*" element={<NoEncontrado />} />
      <Route path="/peliculas" element={<PeliculaCrear/>}></Route>
    </Routes>
  );
};
