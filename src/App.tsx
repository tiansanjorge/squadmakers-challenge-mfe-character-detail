import React from "react";
import CharacterDetail from "./components/CharacterDetail";
import "./index.css";
import { MoreVertical, X } from "lucide-react";

function App() {
  return (
    <>
      <div className="tw-fixed tw-inset-0 tw-z-50 tw-bg-black tw-bg-opacity-60 tw-flex tw-items-center tw-justify-center sm:tw-px-0">
        <div className="tw-bg-white tw-rounded-xl tw-w-full sm:tw-max-w-lg tw-relative tw-shadow-lg tw-max-h-[95vh] tw-overflow-y-auto">
          {/* Botón de cerrar y 3 puntitos visible solo en desktop */}
          <button className="tw-hidden sm:tw-flex tw-bg-white tw-p-2 tw-rounded-full tw-absolute tw-top-4 tw-right-4 tw-text-gray-500 hover:tw-text-gray-700 tw-z-10">
            <X className="tw-w-5 tw-h-5" />
          </button>
          <MoreVertical className="tw-absolute tw-top-[165px] tw-right-5 tw-w-6 tw-h-6 tw-text-[#808C73] tw-cursor-pointer" />
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
        </div>
      </div>
    </>
  );
}

export default App;
