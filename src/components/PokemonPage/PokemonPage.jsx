//Import react
import { useState } from "react";

// Import route link
import { Link } from "react-router-dom";

// Import CSS
import styles from "./PokemonPage.module.css";

//Import Components
import DetailsContainer from "../DetailsContainer/DetailsContainer";
import MenuBar from "../DetailsMenu/MenuBar/MenuBar";

//Import from utils
import capitalizeFirstChar from "../../utils/capitalizeFirstChar";

const PokemonPage = ({ pokemon }) => {
  const [dataToDisplay, setDataToDisplay] = useState(0);

  return (
    <div className={styles.PokemonPage}>
      <div className={`${styles.header} ${styles[pokemon.types[0].type.name]}`}>
        <h1>{capitalizeFirstChar(pokemon.name)}</h1>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`${pokemon.name} sprite`}
        />
      </div>
      <div className={styles.detailsContainer}>
        <MenuBar setDataToDisplay={setDataToDisplay} />
        <DetailsContainer dataToDisplay={dataToDisplay} pokemon={pokemon} />
        <button className={styles.backHomeBtn}>
          <Link to={`/`} className={styles.link}>
            Back Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default PokemonPage;
