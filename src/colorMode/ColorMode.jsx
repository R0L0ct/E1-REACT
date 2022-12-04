import { Button, useColorMode } from "@chakra-ui/react";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} bg='transparent'>
      {colorMode === "light" ? < ModeNightIcon /> : <Brightness7Icon/>}
    </Button>
  );
}

export default ColorMode;
