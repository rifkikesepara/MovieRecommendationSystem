import { Box } from "@mui/material";
import SearchScreen from "../Components/SeacrhScreen";
import Results from "../Components/Results";
import { useState } from "react";

export default function SearchResult() {
  const [loading, setLoading] = useState(true);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "50%",
        height: "100vh",
      }}
    >
      {false ? (
        <SearchScreen
          onDone={() => {
            setLoading(false);
          }}
        />
      ) : (
        <Results />
      )}
    </Box>
  );
}
