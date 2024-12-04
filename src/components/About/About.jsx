// Import CSS
import SideBar from "../SideBar/SideBar";
import styles from "./About.module.css";
import PokemonAboutImg from "../../image/pokemonAbout.jpeg";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.Header}>
        <SideBar className={styles.burger} />
        <div className={styles.title}>About This Project</div>
      </div>
      <div className={styles.text}>
        Welcome to the Pokémon Explorer, a React-based web application that
        brings the world of Pokémon to your fingertips! This project leverages
        the PokéAPI to fetch and display detailed information about your
        favorite Pokémon in a modern, interactive, and visually appealing
        format. Each Pokémon is showcased on a card designed to resemble a
        classic Pokémon trading card, highlighting key details such as its name,
        type, abilities, and stats. Whether you're a seasoned Pokémon Trainer or
        new to the world of Pokémon, this application offers an engaging way to
        explore and learn about these iconic creatures.
      </div>
      <div className={styles.imgDiv}>
        <img className={styles.img} src={PokemonAboutImg} alt="pokemon img" />
      </div>
    </div>
  );
};

export default About;
