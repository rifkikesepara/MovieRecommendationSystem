import { Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Main() {
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
