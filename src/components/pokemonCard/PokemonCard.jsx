import axios from "axios";
import { useEffect, useState } from "react";

// Import CSS
import styles from "./PokemonCard.module.css";

const Pokemon = ({ name, url, setClickedPokemon }) => {
  const [pokemon, setPokemon] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setPokemon(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updatePokeName = () => {
    setClickedPokemon(pokemon);
  };

  // Ensure data is available before rendering
  if (!pokemon) return null;

  return (
    <div
      className={`${styles.card} ${styles[pokemon.types[0].type.name]}`}
      onClick={updatePokeName}
    >
      <h1 className={styles.title1}>{String(name).toUpperCase()}</h1>
      <div className={styles.cardBody}>
        <div className={styles.abilities}>
          <h1 className={styles.pokemonOrder}>#{pokemon.order}</h1>
        </div>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`${name} sprite`}
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default Pokemon;
