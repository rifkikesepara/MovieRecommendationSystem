import { Box, LinearProgress, Skeleton, Typography } from "@mui/material";
import { useEffect } from "react";
import useRecommendation from "../Hooks/useRecommendation";
import usePreferences from "../Hooks/usePreferences";

export default function SearchScreen({ onDone = () => {} }) {
  const { theme } = usePreferences();

  useEffect(() => {
    setTimeout(() => {
      onDone();
    }, 3000);
  }, []);

  useRecommendation(
    JSON.parse(sessionStorage.getItem("indicators")).movieName,
    (data) => sessionStorage.setItem("recommendation", JSON.stringify(data))
  );

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography
        textAlign={"center"}
        color={"primary"}
        sx={{
          fontSize: { xs: 35, md: 50, sm: 50 },
        }}
      >
        Movie Recommendation System
      </Typography>
      <Typography color={"primary"} variant="h5" marginTop={5}>
        Searching the movies
      </Typography>
      <LinearProgress
        sx={{ width: { md: 300, xs: "70%", sm: 300 }, maxWidth: 300 }}
        color="primary"
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          width: { xs: "100%", md: "100%" },
        }}
      >
        <Skeleton width={250} height={100} sx={{ marginInline: 2 }} />
        <Skeleton width={250} height={100} sx={{ marginInline: 2 }} />
        <Skeleton width={250} height={100} sx={{ marginInline: 2 }} />
        <Skeleton width={250} height={100} sx={{ marginInline: 2 }} />
      </Box>
    </Box>
  );
}
