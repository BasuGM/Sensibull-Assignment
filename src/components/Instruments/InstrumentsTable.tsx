// React Imports
import React, { FC } from "react";

// MUI Imports
import { Box, TextField, Typography, Select, MenuItem } from "@mui/material";
import InstrumentsTile from "./InstrumentsTile";
import { useNavigate } from "react-router-dom";

// Functional Imports

// Local Imports

interface InstrumentsTableProps {
  data?: any;
  searchText?: any;
  setSearchText?: any;
  loading?: any;
  selectOption?: any;
  setSelectOption?: any;
}

const InstrumentsTable: FC<InstrumentsTableProps> = (props) => {
  const navigate = useNavigate();

  const handleClick = (item: any) => {
    navigate("/quotes/" + item.symbol);
  };

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
      <Box
        sx={{
          width: "740px",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
          position: "fixed",
          mt: -8,
        }}
      >
        <Select
          sx={{
            width: "200px",
            // border: '2px solid'
          }}
          value={props.selectOption}
          label="Age"
          onChange={(e: any) => props.setSelectOption(e.target.value)}
        >
          <MenuItem value={"Symbol"}>Symbol</MenuItem>
          <MenuItem value={"Name"}>Name</MenuItem>
          <MenuItem value={"Sector"}>Sector</MenuItem>
        </Select>
        <TextField
          value={props.searchText}
          placeholder={"Search " + props.selectOption + "s"}
          onChange={(e: any) => props.setSearchText(e.target.value)}
          variant="outlined"
          sx={{
            width: "530px",
            ml: 1,
            backgroundColor: "white",
          }}
        />
      </Box>

      {!props.loading &&
        props.data.map((item: any, index: number) => (
          <InstrumentsTile key={index} onClick={() => handleClick(item)} data={item} />
        ))}

      {!props.loading && props.data.length === 0 && (
        <Typography
          style={{
            fontSize: 32,
            marginTop: 12,
          }}
        >
          No Data
        </Typography>
      )}

      {props.loading && (
        <Typography
          style={{
            fontSize: 32,
            marginTop: 12,
          }}
        >
          Loading...
        </Typography>
      )}
    </Box>
  );
};

export default InstrumentsTable;
