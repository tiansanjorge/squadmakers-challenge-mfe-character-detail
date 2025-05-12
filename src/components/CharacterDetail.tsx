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
  backgroundImageUrl?: string;
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
  backgroundImageUrl,
}: CharacterDetailProps) => {
  const starSrc = esFavorito ? starFull : starEmpty;
  const estadoColor =
    estado === "Vivo"
      ? "bg-green-100 text-green-700"
      : "bg-gray-100 text-gray-700";

  return (
    <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg bg-gray-50">
      {/* Header con imagen */}
      <div
        className="min-h-32 bg-cover bg-center relative"
        style={{
          backgroundImage: backgroundImageUrl
            ? `url(${backgroundImageUrl})`
            : undefined,
        }}
      >
        <img
          src={imagen}
          alt={nombre}
          className="w-32 h-32 rounded-full border-4 border-white absolute left-4 top-[64px]"
        />
      </div>

      {/* Contenido */}
      <div className="pt-4 px-6 pb-6">
        <div className="ml-36">
          <div className="flex  gap-3 ">
            <h2 className="text-2xl font-bold">{nombre}</h2>
            <button onClick={onToggleFavorito} className="">
              <img src={starSrc} alt="favorito" className="w-5 h-5" />
            </button>
          </div>

          <p className="text-gray-500">{especie}</p>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Info */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-700 mb-2">Información</h3>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Género:</span> {genero}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Origen:</span> {origen}
            </p>
            <p className="text-sm text-gray-600 mt-2">Estado:</p>
            <span
              className={`inline-block mt-1 px-3 py-1 text-sm font-medium rounded-full ${estadoColor}`}
            >
              {estado}
            </span>
          </div>

          {/* Episodios */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-700 mb-2">Episodios</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              {episodios.slice(0, 5).map((ep, i) => (
                <li key={i}>
                  {ep.codigo} - {ep.nombre}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
