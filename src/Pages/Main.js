import { Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useRecommendation from "../Hooks/useRecommendation";
import { useEffect } from "react";
import axios from "axios";

export default function Main() {
  useEffect(() => {
    axios
      .post(
        "http://127.0.0.1:5000/predict/features",
        { movie: "Toy Story", genres: "", start: "", director: "" },
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
      }}
    >
      <Typography variant="h2">Movie Recommendation System</Typography>
      <Typography variant="h5">
        Select the indicators to start the recommendation.
      </Typography>
      <Button
        variant="contained"
        disableElevation
        color="primary"
        sx={{
          backgroundColor: "black",
          p: 5,
          "&:hover": {
            backgroundColor: "grey",
            color: "black",
          },
        }}
        onClick={() => navigate("./movieRecommend")}
      >
        Get Started
      </Button>
    </Box>
  );
}
