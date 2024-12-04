//Import react
import { useState } from "react";

//Import MUI
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import InsightsIcon from "@mui/icons-material/Insights";
import FlashOnIcon from "@mui/icons-material/FlashOn";

//Import Components

const MenuBar = ({ setDataToDisplay }) => {
  const [value, setValue] = useState(0);

  const sendData = (value) => {
    setDataToDisplay(value);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            sendData(newValue);
          }}
        >
          <BottomNavigationAction
            label="About"
            icon={<CatchingPokemonIcon />}
          />
          <BottomNavigationAction label="Base Stats" icon={<InsightsIcon />} />
          <BottomNavigationAction label="Abilities" icon={<FlashOnIcon />} />
        </BottomNavigation>
      </Box>
    </>
  );
};

export default MenuBar;
