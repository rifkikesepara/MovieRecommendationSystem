import { Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import usePreferences from "../Hooks/usePreferences";

export default function Main() {
  const { theme } = usePreferences();

  useEffect(() => {
    axios
      .post(
        "http://127.0.0.1:5000/predict/features",
        { movie: "Toy Story", genres: "", star: "", director: "" },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography color={"primary"} variant="h2">
        Movie Recommendation System
      </Typography>
      <Typography color={"primary"} variant="h5">
        Select the indicators to start the recommendation.
      </Typography>
      <Button
        variant="contained"
        disableElevation
        color="primary"
        sx={{
          p: 5,
        }}
        onClick={() => navigate("./movieRecommend")}
      >
        Get Started
      </Button>
    </Box>
  );
}
