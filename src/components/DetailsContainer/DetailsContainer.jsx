// Import CSS
import styles from "./DetailsContainer.module.css";

//Import Components
import PokemonAbout from "../DetailsMenu/PokemonAbout/PokemonAbout";
import PokemonStats from "../DetailsMenu/PokemonStats/PokemonStats";
import PokemonAbilities from "../DetailsMenu/PokemonAbilities/PokemonAbilities";

const DetailsContainer = ({ dataToDisplay, pokemon }) => {
  if (dataToDisplay === 0) {
    return <PokemonAbout pokemon={pokemon} />;
  }
  if (dataToDisplay === 1) {
    return <PokemonStats stats={pokemon.stats} />;
  }
  if (dataToDisplay === 2) {
    return <PokemonAbilities pokemon={pokemon} />;
  }
};

export default DetailsContainer;
