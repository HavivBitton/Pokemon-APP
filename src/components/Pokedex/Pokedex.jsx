import axios from "axios";
import { useEffect, useState } from "react";
import CSSstyle from "./Pokedex.module.css";

// Import from MUI
import { Box, Modal } from "@mui/material";

//Import Components
import Pokemon from "../pokemonCard/PokemonCard.jsx";
import PokemonBox from "../pokemonBox/PokemonBox.jsx";
import SideBar from "../SideBar/SideBar.jsx";

const Pokeball = () => {
  const [pokemons, setPokemons] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState({});
  const [open, setOpen] = useState(false);
  const [limit, setLimit] = useState(20);

  // Import data from API
  const fetchData = async () => {
    try {
      const {
        data: { results },
      } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
      setPokemons(results);
      console.log(limit);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggle = (e) => {
    setOpen((open) => !open);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "85vw",
    height: "75vw",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    padding: "0px",
  };

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 20);
    console.log(limit);
    fetchData();
  };

  return (
    <div>
      <div className={CSSstyle.pokadexHeader}>
        <SideBar className={CSSstyle.burger} />
        <div className={CSSstyle.pokadexTitle}>
          <h1>Pokadex</h1>
        </div>
      </div>
      <div className={CSSstyle.pokemonListDiv}>
        {pokemons.map((pokemon) => (
          <div onClick={toggle} key={pokemon.name}>
            <Pokemon
              name={pokemon.name}
              url={pokemon.url}
              setClickedPokemon={setClickedPokemon}
            />
          </div>
        ))}
        <div className={CSSstyle.loadBtnContainer}>
          <button
            className={CSSstyle.LoadMoreBtn}
            onClick={() => handleLoadMore(limit)}
          >
            Load More !
          </button>
        </div>
        <div className={CSSstyle.boxContainer}>
          <Modal
            open={open}
            onClose={toggle}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <PokemonBox clickedPokemon={clickedPokemon} />
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Pokeball;
