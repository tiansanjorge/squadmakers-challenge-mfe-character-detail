import React from "react";
import "../index.css";
import starFull from "../assets/star-full.png";
import starEmpty from "../assets/star-empty.png";

type CharacterDetailProps = {
  nombre: string;
  imagen: string;
  especie: string;
  estado: "Vivo" | "Muerto" | "Desconocido";
  genero: string;
  origen: string;
  ubicacion: string;
  episodios: {
    nombre: string;
    codigo: string;
  }[];
  esFavorito?: boolean;
  onToggleFavorito?: () => void;
};

const CharacterDetail = ({
  nombre,
  imagen,
  especie,
  estado,
  genero,
  origen,
  ubicacion,
  episodios,
  esFavorito = false,
  onToggleFavorito,
}: CharacterDetailProps) => {
  const starSrc = esFavorito ? starFull : starEmpty;

  const starAlt = esFavorito ? "Quitar de favoritos" : "Agregar a favoritos";
  return (
    <div className="p-4 max-w-md bg-white rounded-xl shadow-lg relative">
      {/* Estrella de favorito */}
      <button
        onClick={onToggleFavorito}
        className="absolute top-4 right-4 rounded-full p-2"
      >
        <img src={starSrc} alt={starAlt} className="w-6 h-6" />
      </button>

      <img
        src={imagen}
        alt={nombre}
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h2 className="text-2xl font-bold text-center mt-4">{nombre}</h2>
      <p className="text-center text-sm text-gray-600">{especie}</p>

      <div className="mt-4 text-sm text-gray-700 space-y-1">
        <p>
          <strong>Estado:</strong> {estado}
        </p>
        <p>
          <strong>Género:</strong> {genero}
        </p>
        <p>
          <strong>Origen:</strong> {origen}
        </p>
        <p>
          <strong>Ubicación:</strong> {ubicacion}
        </p>
        <div className="mt-3">
          <strong>Episodios:</strong>
          <ul className="list-disc list-inside mt-1 space-y-1">
            {episodios.slice(0, 5).map((ep, i) => (
              <li key={i}>
                {ep.codigo} - {ep.nombre}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
