import {
  Box,
  Button,
  Pagination,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import usePreferences from "../Hooks/usePreferences";

export default function Results() {
  const navigate = useNavigate();
  const { theme } = usePreferences();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const mobile = useMediaQuery(theme.breakpoints.up("sm"));

  const divideData = matches ? 6 : mobile ? 4 : 2;

  const data = JSON.parse(sessionStorage.getItem("recommendation"));
  const [animate, setAnimate] = useState(false);
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setStartIndex(page);
      setAnimate(true);
    }, 600);
  }, [page]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        height: "100vh",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography textAlign={"center"} color={"primary"} variant="h4">
        Results for the Movie...
      </Typography>
      {!data.length && (
        <Typography color={"primary"} variant="h2">
          No Movies Found to Recommend
        </Typography>
      )}
      {data.length > 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: { md: 1000, xs: "100%" },
            height: "80%",
            overflowY: "hidden",
            flexWrap: "wrap",
          }}
        >
          {data
            .slice(divideData * (startIndex - 1), startIndex * divideData)
            .map(({ id, title, genres, score, release_date }) => {
              return (
                <MovieCard
                  key={id}
                  animate={animate}
                  title={title}
                  genres={genres}
                  score={score}
                  release_date={release_date}
                />
              );
            })}
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {matches && (
          <Button
            variant="contained"
            disableElevation
            sx={{
              position: "absolute",
              left: 10,
              paddingInline: 5,
              paddingBlock: 2,
            }}
            onClick={() => navigate("../movieRecommend")}
          >
            Make a new search
          </Button>
        )}
        <Pagination
          count={parseInt(data.length / divideData) + 1}
          onChange={(e, p) => {
            setAnimate(false);
            setPage(p);
          }}
        />
      </Box>
    </Box>
  );
}
