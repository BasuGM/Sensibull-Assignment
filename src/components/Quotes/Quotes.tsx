// React Imports
import React, { FC, useEffect, useState } from "react";

// MUI Imports
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Functional Imports
import { getQuotesBySymbol } from "../../api/API";
// import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";

// Local Imports
import QuotesTile from "./QuotesTile";
import { useTimer } from "react-timer-hook";

interface QuotesProps {}

const Quotes: FC<QuotesProps> = (props) => {
  const { symbol = "" } = useParams();
  const navigate = useNavigate();

  const [quotes, setQuotes] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const expiryTimestamp = new Date("2022-12-03T06:38:07.000Z");
  const Timer = useTimer({
    expiryTimestamp,
    onExpire: () => refreshQuotes(),
  });

  useEffect(() => {
    refreshQuotes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshQuotes = () => {
    setLoading(true);
    getQuotesBySymbol(symbol).then((response) => {
      setQuotes(response.payload[symbol]);
      setLoading(false);

      const difference =
        new Date(response.payload[symbol][0].valid_till).valueOf() -
        new Date(Date.now() - 1000 * 60 * 330).valueOf();

      const temp = new Date(Date.now() + difference + 20000);

      Timer.restart(temp);
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        mt: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "440px",
        }}
      >
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </IconButton>
        <Typography
          sx={{
            fontSize: 32,
          }}
        >
          {symbol}
        </Typography>
        <IconButton disabled>
          <ArrowBackIcon sx={{ color: "#FFF" }} />
        </IconButton>
      </Box>

      {!loading &&
        quotes.map((item: any) => (
          <QuotesTile key={item.price} title={item.price} />
        ))}

      {loading && (
        <Typography
          sx={{
            fontSize: 32,
          }}
        >
          Loading...
        </Typography>
      )}

      <Typography>
        {"Next refresh in: " +
          Timer.minutes +
          " Minutes " +
          Timer.seconds +
          " Seconds "}
      </Typography>
    </Box>
  );
};

export default Quotes;
