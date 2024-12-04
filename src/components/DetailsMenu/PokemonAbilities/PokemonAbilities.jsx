import styles from "./PokemonAbilities.module.css";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import capitalizeFirstChar from "../../../utils/capitalizeFirstChar";

const PokemonAbilities = ({ pokemon }) => {
  return (
    <div>
      <div className={styles.abilitiesUl}>
        {pokemon.abilities.map((ability) => (
          <div key={ability.ability.name} className={styles.abilitiesLi}>
            <AutoAwesomeIcon sx={{ fontSize: 40 }} />
            <p className={styles.li}>
              {capitalizeFirstChar(ability.ability.name)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonAbilities;
