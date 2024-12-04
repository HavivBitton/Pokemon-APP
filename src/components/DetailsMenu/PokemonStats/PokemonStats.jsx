import getStatsNameShort from "../../../utils/getStatsNameShort";
import styles from "./PokemonStats.module.css";

const PokemonStats = ({ stats }) => {
  return (
    <div className={styles.AllStatsContainer}>
      {stats.map((stat) => (
        <div key={stat.stat.name} className={styles.StatContainer}>
          <div className={styles.statContainerOfName}>
            <h4 className={stat.stat.name}>
              {getStatsNameShort(stat.stat.name)}
            </h4>
          </div>
          <div className={styles.StatSliderValue}>
            <progress
              max={100}
              value={stat.base_stat}
              className={
                stat.base_stat <= 45
                  ? styles.red
                  : stat.base_stat <= 55
                  ? styles.orange
                  : styles.green
              }
            ></progress>
          </div>
          <div className={styles.statValue}>
            <h4>{stat.base_stat}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonStats;
