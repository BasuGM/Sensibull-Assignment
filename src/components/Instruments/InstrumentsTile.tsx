// React Imports
import React, { FC } from "react";

// MUI Imports
import { Typography, Paper } from "@mui/material";

// Functional Imports

// Local Imports

interface InstrumentsTileProps {
  data?: any;
  sx?: any;
}

const InstrumentsTile: FC<InstrumentsTileProps> = (props) => {
  return (
    <Paper
      sx={{
        border: "2px solid #666",
        height: "50px",
        width: "700px",
        borderRadius: "4px",
        m: 1,
        display: "flex",
        alignItems: "center",
        // justifyContent: "space-between",
        px: 2,
        cursor: 'pointer',
        ...props.sx,
        ':hover': {
          backgroundColor: '#DDD'
        }
      }}
    >
      <Typography
        sx={{
          width: "30%",
        }}
      >
        {props.data?.symbol}
      </Typography>

      <Typography
        sx={{
          width: "40%",
        }}
      >
        {props.data?.name}
      </Typography>

      <Typography
        sx={{
          width: "30%",
        }}
      >
        {props.data?.sector}
      </Typography>
    </Paper>
  );
};

export default InstrumentsTile;
