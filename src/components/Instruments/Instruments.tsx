// React Imports
import React, { FC, useEffect, useState } from "react";

// MUI Imports
import { Box } from "@mui/material";
import { getInstruments } from "../../api/API";
import InstrumentsTable from "./InstrumentsTable";

// Functional Imports

// Local Imports

interface InstrumentsProps {}

const Instruments: FC<InstrumentsProps> = (props) => {
  const [instruments, setInstruments] = useState<any>([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<any>([])

  useEffect(() => {
    getInstruments().then((response) => {
      var rowArray = response.split("\n");

      const fullArray: any = [];

      rowArray.map((item: any) => {
        var colArray = item.split(",");
        const stringToObject = {
          symbol: colArray[0],
          name: colArray[1],
          sector: colArray[2],
          validTill: colArray[3],
        };

        fullArray.push(stringToObject);

        return 0
      });

      setInstruments(fullArray.slice(1, fullArray.length - 1));
    });
  }, []);

  const handleSearch = (e: any) => {
    setSearchText(e)
    const searchData = instruments.filter((item: any) => item.symbol.includes(searchText))
    setSearchResults(searchData)
  }

  return (
    <Box>
      <InstrumentsTable
        data={searchText === '' ? instruments : searchResults}
        searchText={searchText}
        setSearchText={handleSearch}
      />
      {/* <InstrumentsTable data={instruments} /> */}
    </Box>
  );
};

export default Instruments;
