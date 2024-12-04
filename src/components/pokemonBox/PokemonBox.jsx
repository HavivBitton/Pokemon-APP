// Import route link
import { Link } from "react-router-dom";

// Import CSS
import styles from "./PokemonBox.module.css";

const PokemonBox = ({ clickedPokemon }) => {
  const v1Src = clickedPokemon.sprites.back_default;

  return (
    <div className={styles.PokemonBox}>
      <div
        className={`${styles.header} ${
          styles[clickedPokemon.types[0].type.name]
        }`}
      >
        <h1 className={styles.headerTitle}>
          {String(clickedPokemon.name).toUpperCase()}
        </h1>
        <div className={styles.headerContainer}>
          <h1 className={styles.pokemonOrder}>#{clickedPokemon.order}</h1>
          <img
            // src={
            //   clickedPokemon.sprites.versions["generation-v"]["black-white"]
            //     .animated.front_default
            // }
            src={clickedPokemon.sprites.other.showdown.front_default}
            alt={`${clickedPokemon.name} sprite`}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.boxDetails}>
        <button
          className={`${styles.showMoreBtn} ${
            styles[clickedPokemon.types[0].type.name]
          }`}
        >
          <Link
            to={`pokemon/${clickedPokemon.name}`}
            state={{ pokemon: clickedPokemon }}
            className={styles.link}
          >
            Show this Pokémon!
          </Link>
        </button>
      </div>
    </div>
  );
};

export default PokemonBox;
