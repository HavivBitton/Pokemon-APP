//Import Icon
import HeightIcon from "@mui/icons-material/Height";
import ScaleIcon from "@mui/icons-material/Scale";

import styles from "./PokemonAbout.module.css";

const PokemonAbout = ({ pokemon }) => {
  return (
    <div>
      <div className={styles.aboutState}>
        <HeightIcon sx={{ fontSize: 40 }} />
        <span> Height - </span>
        {pokemon.height}
      </div>

      <div className={styles.aboutState}>
        <ScaleIcon sx={{ fontSize: 40 }} />
        <span> Weight - </span>
        {pokemon.weight}
      </div>
    </div>
  );
};

export default PokemonAbout;
