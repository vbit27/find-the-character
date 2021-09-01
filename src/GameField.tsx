import Box from '@material-ui/core/Box';
import React from 'react';

const GameField = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="60vh"
      width="60vw"
    >
      <img src="/images/wallpaper.jpg" alt="waldo" />
    </Box>
  );
};

export default GameField;
