import React from "react";
import "../index.css";
import starFull from "../assets/star-full.png";
import starEmpty from "../assets/star-empty.png";
import { ArrowLeft } from "lucide-react";
import { MoreVertical } from "lucide-react";

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
  onBack?: () => void;
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
  onBack,
}: CharacterDetailProps) => {
  const starSrc = esFavorito ? starFull : starEmpty;
  const estadoColor =
    estado === "Vivo"
      ? "tw-bg-green-100 tw-text-green-700"
      : estado === "Muerto"
      ? "tw-bg-red-100 tw-text-red-700"
      : "tw-bg-gray-100 tw-text-gray-700";

  return (
    <div className="tw-rounded-xl tw-bg-[#F0F1EC]">
      {/* Header */}
      <div
        className="tw-relative tw-h-[128px] tw-bg-cover tw-bg-top 
      before:tw-content-[''] before:tw-absolute before:tw-inset-0 
      before:tw-bg-[linear-gradient(0deg,_rgba(0,0,0,0)_-10%,_rgba(0,0,0,0.8)_80%)] 
      before:tw-bg-blend-multiply sm:before:tw-hidden 
      sm:after:tw-content-[''] sm:after:tw-absolute sm:after:tw-inset-0 
      sm:after:tw-bg-black sm:after:tw-opacity-40"
        style={{
          backgroundImage: backgroundImageUrl
            ? `url(${backgroundImageUrl})`
            : undefined,
        }}
      >
        {/* Botones */}
        {!onBack && (
          <div>
            <button
              onClick={onBack}
              className="tw-absolute tw-top-3 tw-left-3 tw-rounded-full tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-shadow sm:tw-hidden"
            >
              <ArrowLeft className="tw-w-8 tw-h-8 tw-text-white" />
            </button>
            <MoreVertical className="tw-absolute tw-top-4 tw-right-3 tw-w-8 tw-h-8 tw-text-white tw-cursor-pointer" />
          </div>
        )}

        <img
          src={imagen}
          alt={nombre}
          className="tw-w-24 tw-h-24 sm:tw-w-32 sm:tw-h-32 tw-rounded-full tw-border-4 tw-border-white tw-absolute tw-left-6 tw-top-[64px] tw-z-10"
        />
      </div>

      <div className="tw-pt-4 tw-px-5 tw-pb-5">
        <div className="tw-text-center sm:tw-text-left sm:tw-ml-40">
          <div className="tw-flex tw-items-center tw-justify-center sm:tw-justify-start tw-gap-3 tw-mb-1">
            <h2 className="tw-text-2xl tw-font-bold">{nombre}</h2>
            <button onClick={onToggleFavorito}>
              <img src={starSrc} alt="favorito" className="tw-w-5 tw-h-5" />
            </button>
          </div>
          <p className="tw-text-gray-500 tw-text-sm">{especie}</p>
        </div>

        <div className="tw-mt-6 tw-flex tw-justify-between tw-gap-4">
          <div className="tw-bg-white tw-p-4 tw-rounded-lg tw-shadow">
            <h3 className="tw-font-semibold tw-text-gray-700 tw-mb-2">
              Información
            </h3>
            <p className="tw-text-sm tw-text-gray-600">
              <span className="tw-text-sm tw-font-semibold tw-text-[#808C73]">
                Género:
              </span>
              <br /> {genero}
            </p>
            <p className="tw-text-sm tw-text-gray-600">
              <span className="tw-text-sm tw-font-semibold tw-text-[#808C73]">
                Origen:
              </span>
              <br /> {origen}
            </p>
            <p className="tw-text-sm tw-text-gray-600 tw-mt-2">Estado:</p>
            <span
              className={`tw-inline-block tw-mt-1 tw-px-3 tw-py-1 tw-text-sm tw-font-medium tw-rounded-full ${estadoColor}`}
            >
              {estado}
            </span>
          </div>

          <div className="tw-bg-white tw-p-4 tw-rounded-lg tw-shadow tw-w-full">
            <h3 className="tw-font-semibold tw-text-gray-700 tw-mb-2">
              Episodios
            </h3>
            <ul className="tw-text-sm tw-text-gray-600 tw-space-y-1">
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
