import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

 const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
 
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
    bgColor={"ButtonShadow"}
     variant="ghost"
      color="current"
      pos={'fixed'}
      top={'2'}
      right={'5'}
      zIndex={'overlay'}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
export default ColorModeSwitcher;