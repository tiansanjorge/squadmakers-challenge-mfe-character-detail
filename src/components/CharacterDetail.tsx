import React from "react";
import "../index.css";
import starFull from "../assets/star-full.png";
import starEmpty from "../assets/star-empty.png";
import aliveIcon from "../assets/alive.png";
import deadIcon from "../assets/dead.png";
import unknownIcon from "../assets/unknown.png";

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
}: CharacterDetailProps) => {
  const starSrc = esFavorito ? starFull : starEmpty;
  const estadoColor =
    estado === "Vivo"
      ? "tw-bg-[#E7F3D8] tw-text-[#354E18]"
      : estado === "Muerto"
      ? "tw-bg-red-100 tw-text-red-700"
      : "tw-bg-gray-100 tw-text-gray-700";

  // componente de personaje relacionado para reutilizar
  const RelatedCard = () => (
    <div className="tw-bg-white tw-rounded-xl tw-shadow tw-w-[192px] tw-min-w-[192px] tw-flex-none tw-font-sans tw-mt-2 tw-mb-3">
      <div className="tw-relative">
        <div className="tw-h-[144px] tw-w-full tw-overflow-hidden tw-flex tw-items-center tw-justify-center">
          <img
            src={imagen}
            alt={nombre}
            className="tw-w-full tw-h-[144px] tw-object-cover tw-object-center tw-rounded-t-xl"
          />
        </div>
        <button className="tw-absolute tw-top-2 tw-right-2 tw-bg-white tw-rounded-full tw-w-7 tw-h-7 tw-flex tw-items-center tw-justify-center tw-shadow">
          <img src={starSrc} alt="favoritos" className="tw-w-3.5 tw-h-3.5 " />
        </button>
      </div>
      <div className="tw-p-3">
        <h3 className="tw-text-sm tw-font-semibold tw-text-gray-800 mb-1">
          {nombre}
        </h3>
        <p className="tw-text-gray-400 tw-text-xs tw-font-semibold">
          {especie}
        </p>
      </div>
    </div>
  );

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
        <img
          src={imagen}
          alt={nombre}
          className="tw-w-24 tw-h-24 sm:tw-w-32 sm:tw-h-32 tw-rounded-full tw-border-4 tw-border-white tw-absolute tw-left-1/2 tw-translate-x-[-48px] sm:tw-translate-x-0 sm:tw-left-6 tw-top-[80px] sm:tw-top-[64px] tw-z-10"
        />
      </div>

      <div className="tw-pt-14 sm:tw-pt-4 tw-px-5 tw-pb-5">
        <div className="tw-text-center sm:tw-text-left sm:tw-ml-40">
          <div className="tw-flex tw-items-center tw-justify-center sm:tw-justify-start tw-gap-3">
            <h2 className="tw-text-2xl tw-font-semibold">{nombre}</h2>
            <button onClick={onToggleFavorito}>
              <img src={starSrc} alt="favorito" className="tw-w-5 tw-h-5" />
            </button>
          </div>
          <p className="tw-text-gray-400 tw-text-sm tw-font-semibold">
            {especie}
          </p>
        </div>

        {/* Información */}
        <div className="tw-mt-6 tw-flex tw-flex-col sm:tw-flex-row tw-justify-between tw-gap-4">
          <div className=" tw-bg-white tw-p-4 tw-rounded-lg tw-shadow">
            <h3 className="tw-font-semibold tw-text-gray-700 tw-mb-2">
              Información
            </h3>
            <div className="tw-flex sm:tw-flex-col tw-flex-wrap">
              <p className="tw-text-sm tw-w-1/2 sm:tw-w-auto tw-text-gray-600 tw-mb-4">
                <span className="tw-text-xs tw-font-semibold tw-text-[#808C73]">
                  Género:
                </span>
                <br /> {genero}
              </p>
              <p className="tw-text-sm tw-w-1/2 sm:tw-w-auto tw-text-gray-600 tw-mb-4">
                <span className="tw-text-xs tw-font-semibold tw-text-[#808C73]">
                  Origen:
                </span>
                <br /> {origen}
              </p>
              <div className="tw-flex tw-flex-col tw-mb-2">
                <p className="tw-text-xs tw-w-1/2 tw-mb-1 sm:tw-w-auto tw-font-semibold tw-text-[#808C73]">
                  Estado:
                </p>
                <div
                  className={`tw-flex tw-gap-1 tw-max-w-fit tw-items-center tw-mt-1 tw-px-3 tw-py-1 tw-text-sm tw-font-semibold tw-rounded-full ${estadoColor}`}
                >
                  <img
                    src={
                      estado === "Vivo"
                        ? aliveIcon
                        : estado === "Muerto"
                        ? deadIcon
                        : unknownIcon
                    }
                    alt={estado}
                    className="tw-w-4 tw-h-4"
                  />
                  {estado}
                </div>
              </div>
            </div>
          </div>

          {/* Episodios */}
          <div className="tw-bg-white tw-p-4 tw-rounded-lg tw-shadow tw-w-full">
            <h3 className="tw-font-semibold tw-text-gray-700 tw-mb-2">
              Episodios
            </h3>
            <ul className="tw-text-sm tw-text-gray-600 tw-space-y-3 ">
              {episodios.slice(0, 5).map((ep, i) => (
                <li key={i} className="">
                  <div>
                    <span className="tw-text-[#808C73] tw-me-2">
                      {ep.codigo}
                    </span>
                    {ep.nombre}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ubicacion actual y origen */}
        <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 tw-text-sm tw-mt-6">
          <div className="tw-w-1/2 tw-flex tw-flex-col">
            <p className="tw-text-xs tw-font-bold tw-text-[#808C73] tw-mb-1">
              First seen in
            </p>
            <p className="tw-text-gray-500">{origen}</p>
          </div>
          <div className="tw-w-1/2 tw-flex tw-flex-col">
            <p className="tw-text-xs tw-font-bold tw-text-[#808C73] tw-mb-1">
              Last known location
            </p>
            <p className="tw-text-gray-500">{ubicacion}</p>
          </div>
        </div>

        {/* Persoajes Relacionados */}

        <div className="tw-text-sm tw-mt-6">
          <h3 className="tw-font-semibold tw-text-gray-700 tw-mb-2">
            Personajes relacionados
          </h3>
          <div className="tw-flex tw-gap-4 tw-overflow-x-scroll">
            <RelatedCard />
            <RelatedCard />
            <RelatedCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
