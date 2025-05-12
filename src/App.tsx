import React from "react";
import CharacterDetail from "./components/CharacterDetail";

function App() {
  return (
    <>
      <CharacterDetail
        nombre="Rick Sanchez"
        imagen="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        especie="Humano"
        ubicacion="Citadel of Ricks"
        estado="Vivo"
        genero="Masculino"
        origen="Earth (C-137)"
        episodios={[
          { nombre: "Pilot", codigo: "S01E01" },
          { nombre: "Lawnmower Dog", codigo: "S01E02" },
        ]}
        backgroundImageUrl="/detail-bg.jpg"
      />
    </>
  );
}

export default App;
