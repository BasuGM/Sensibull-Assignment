// React Imports
import React, { FC } from "react";

// MUI Imports
import { Typography, Paper } from "@mui/material";

// Functional Imports

// Local Imports

interface QuotesTileProps {
  title?: any;
}

const QuotesTile: FC<QuotesTileProps> = (props) => {
  return (
    <Paper
      sx={{
        width: "400px",
        height: "40px",
        m: 1,
        border: "2px solid #666",        
        cursor: 'pointer',
        display: "flex",
        alignItems: "center",
        ':hover': {
          backgroundColor: '#DDD'
        },
        pl: 2
      }}
    >
      <Typography>{props.title}</Typography>
    </Paper>
  );
};

export default QuotesTile;
