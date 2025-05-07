import { useEffect, useState } from "react";

type CharacterDetailProps = {
  nombre: string;
  imagen: string;
  especie: string;
  ultimaUbicacion: string;
  primeraAparicion: string;
  estado: "Vivo" | "Muerto" | "Desconocido";
  genero: string;
  episodios: string[];
};

type Episodio = {
  id: number;
  name: string;
  episode: string;
};

export const CharacterDetail = ({
  nombre,
  imagen,
  especie,
  ultimaUbicacion,
  primeraAparicion,
  estado,
  genero,
  episodios,
}: CharacterDetailProps) => {
  const [detallesEpisodios, setDetallesEpisodios] = useState<Episodio[]>([]);

  useEffect(() => {
    Promise.all(episodios.map((url) => fetch(url).then((res) => res.json())))
      .then((data) => setDetallesEpisodios(data))
      .catch((error) => console.error("Error cargando episodios:", error));
  }, [episodios]);

  return (
    <div className="p-4 max-w-md bg-white rounded-xl shadow-lg">
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
          <strong>Primera aparición:</strong> {primeraAparicion}
        </p>
        <p>
          <strong>Última ubicación:</strong> {ultimaUbicacion}
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-md font-semibold mb-2">Episodios:</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
          {detallesEpisodios.map((ep) => (
            <li key={ep.id}>
              {ep.episode} - {ep.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
