import { useLocation } from "react-router-dom";

//Import Components
import PokemonPage from "../../components/PokemonPage/PokemonPage";

const PokemonPageIndex = () => {
  const location = useLocation();
  const { pokemon } = location.state || {}; // Access the passed data

  if (!pokemon) {
    return <div>No Pokémon data available.</div>; // Handle if state is missing
  }

  return (
    <>
      <PokemonPage pokemon={pokemon} />
    </>
  );
};

export default PokemonPageIndex;
