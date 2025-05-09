import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CharacterDetail from "./CharacterDetail";

const mockCharacter = {
  nombre: "Rick Sanchez",
  imagen: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  especie: "Humano",
  estado: "Vivo" as "Vivo",
  genero: "Masculino",
  origen: "Earth (C-137)",
  ubicacion: "Citadel of Ricks",
  episodios: [
    { nombre: "Pilot", codigo: "S01E01" },
    { nombre: "Lawnmower Dog", codigo: "S01E02" },
  ],
};

describe("CharacterDetail", () => {
  it("muestra el nombre, especie y episodios", () => {
    render(<CharacterDetail {...mockCharacter} />);
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Humano")).toBeInTheDocument();
    expect(screen.getByText("S01E01 - Pilot")).toBeInTheDocument();
    expect(screen.getByText("S01E02 - Lawnmower Dog")).toBeInTheDocument();
  });

  it("muestra la estrella llena si es favorito", () => {
    render(<CharacterDetail {...mockCharacter} esFavorito={true} />);
    expect(screen.getByText("★")).toBeInTheDocument();
  });

  it("llama a onToggleFavorito cuando se hace clic en la estrella", () => {
    const mockToggle = jest.fn();
    render(
      <CharacterDetail
        {...mockCharacter}
        esFavorito={false}
        onToggleFavorito={mockToggle}
      />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(mockToggle).toHaveBeenCalled();
  });
});
