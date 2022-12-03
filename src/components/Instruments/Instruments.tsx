// React Imports
import React, { FC, useEffect, useState } from "react";

// MUI Imports
import { Box } from "@mui/material";

// Functional Imports
import { getInstruments } from "../../api/API";

// Local Imports
import InstrumentsTable from "./InstrumentsTable";

interface InstrumentsProps {}

const Instruments: FC<InstrumentsProps> = (props) => {
  const [instruments, setInstruments] = useState<any>([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [selectOption, setSelectOption] = useState("Symbol");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    getInstruments().then((response) => {
      setLoading(false);
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

        return 0;
      });

      setInstruments(fullArray.slice(1, fullArray.length - 1));
    });
  };

  useEffect(() => {
    const searchData = instruments.filter((item: any) => {
      if (selectOption === "Symbol") {
        return item.symbol.toLowerCase().includes(searchText.toLowerCase());
      } else if (selectOption === "Name") {
        return item.name.toLowerCase().includes(searchText.toLowerCase());
      } else if (selectOption === "Sector") {
        return item.sector.toLowerCase().includes(searchText.toLowerCase());
      }

      return 0;
    });
    setSearchResults(searchData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <Box>
      <InstrumentsTable
        data={searchText === "" ? instruments : searchResults}
        searchText={searchText}
        setSearchText={(e: any) => setSearchText(e)}
        loading={loading}
        selectOption={selectOption}
        setSelectOption={setSelectOption}
      />
    </Box>
  );
};

export default Instruments;
