import { Typography, Button, Box, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import usePreferences from "../Hooks/usePreferences";
import { useDetails } from "../Hooks/useRecommendation";

export default function Main() {
  const { theme } = usePreferences();
  const [content, setContent] = useState();

  useDetails("Toy Story 3", (data) => setContent(data));

  // useEffect(() => {
  //   axios
  //     .post(
  //       "http://127.0.0.1:5000/predict/features",
  //       { movie: "Toy Story", genres: "", star: "", director: "" },
  //       {
  //         headers: {
  //           "Content-Type": "application/x-www-form-urlencoded",
  //         },
  //       }
  //     )
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

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
      {/* <Typography
        color={"primary"}
        dangerouslySetInnerHTML={{ __html: content }}
      /> */}
      <Typography
        color={"primary"}
        sx={{ textAlign: "center", fontSize: { xs: 35, sm: 50, md: 80 } }}
      >
        Movie Recommendation System
      </Typography>
      <Typography textAlign={"center"} color={"primary"} variant="h5">
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
