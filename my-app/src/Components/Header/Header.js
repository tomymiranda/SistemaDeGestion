//import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from "react";

const Header = ({variant,prop}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant={variant} fontStyle={'bold'} component="div" sx={{ flexGrow: 1 }}>
        {prop}
      </Typography>
    </Box>
  );
};
export default Header;