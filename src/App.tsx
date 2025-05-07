import CharacterDetail from "./components/CharacterDetail";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <CharacterDetail
        nombre="Rick Sanchez"
        especie="Humano"
        imagen="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        ultimaUbicacion="Earth (C-137)"
        primeraAparicion="Pilot"
        estado="Vivo"
      />
    </div>
  );
}

export default App;
