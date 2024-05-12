import { Box, LinearProgress, Skeleton, Typography } from "@mui/material";
import { useEffect } from "react";
import useRecommendation from "../Hooks/useRecommendation";

export default function SearchScreen({ onDone = () => {} }) {
  useEffect(() => {
    setTimeout(() => {
      onDone();
    }, 5000);
  }, []);

  useRecommendation(
    JSON.parse(sessionStorage.getItem("indicators")).movieName,
    (data) => sessionStorage.setItem("recommendation", JSON.stringify(data))
  );

  return (
    <>
      <Typography variant="h2">Movie Recommendation System</Typography>
      <Typography variant="h5" marginTop={5}>
        Searching the movies
      </Typography>
      <LinearProgress sx={{ width: 300 }} color="inherit" />

      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Skeleton width={250} height={100} sx={{ marginInline: 2 }} />
        <Skeleton width={250} height={100} sx={{ marginInline: 2 }} />
        <Skeleton width={250} height={100} sx={{ marginInline: 2 }} />
        <Skeleton width={250} height={100} sx={{ marginInline: 2 }} />
      </Box>
    </>
  );
}
