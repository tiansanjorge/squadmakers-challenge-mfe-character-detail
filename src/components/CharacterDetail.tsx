type CharacterDetailProps = {
  nombre: string;
  imagen: string;
  especie: string;
  ultimaUbicacion: string;
  primeraAparicion: string;
  estado: "Vivo" | "Muerto" | "Desconocido";
};

export const CharacterDetail = ({
  nombre,
  imagen,
  especie,
  ultimaUbicacion,
  primeraAparicion,
  estado,
}: CharacterDetailProps) => {
  return (
    <div className="p-4 max-w-md bg-white rounded-xl shadow-lg">
      <img
        src={imagen}
        alt={nombre}
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h2 className="text-2xl font-bold text-center mt-4">{nombre}</h2>
      <p className="text-center text-sm text-gray-600">{especie}</p>
      <div className="mt-4 text-sm text-gray-700">
        <p>
          <strong>Estado:</strong> {estado}
        </p>
        <p>
          <strong>Primera aparición:</strong> {primeraAparicion}
        </p>
        <p>
          <strong>Última ubicación:</strong> {ultimaUbicacion}
        </p>
      </div>
    </div>
  );
};
