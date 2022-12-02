// React Imports
import React, { FC } from "react";

// MUI Imports
import { Box, TextField, Typography } from "@mui/material";
import InstrumentsTile from "./InstrumentsTile";

// Functional Imports

// Local Imports

interface InstrumentsTableProps {
  data?: any;
  searchText?: any;
  setSearchText?: any;
}

const InstrumentsTable: FC<InstrumentsTableProps> = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        mt: 10,
      }}
    >
      <TextField
        value={props.searchText}
        placeholder="Search Symbols"
        onChange={(e: any) => props.setSearchText(e.target.value.toUpperCase())}
        variant="outlined"
        sx={{
          width: "740px",
          mt: -8,
          position: "fixed",
          backgroundColor: "white",
          // mt: -10
        }}
      />
      {props.data.map((item: any, index: number) => (
        <InstrumentsTile data={item} />
      ))}

      {props.data.length === 0 && (
        <Typography
          style={{
            fontSize: 32,
            marginTop: 12
          }}
        >
          No Data
        </Typography>
      )}
    </Box>
  );
};

export default InstrumentsTable;
