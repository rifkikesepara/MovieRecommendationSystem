import { Star, StarSharp } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Grow,
  IconButton,
  Pagination,
  Rating,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Results() {
  const [animate, setAnimate] = useState(false);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1000);
  }, []);

  function adjustNameForURL(name) {
    var newName = "";
    for (let index = 0; index < name.length; index++) {
      if (name[index] == " ") newName += "%20";
      else newName += name[index];
    }

    return newName;
  }

  useEffect(() => {
    const indicators = JSON.parse(localStorage.getItem("indicators"));
    console.log(adjustNameForURL(indicators.movieName));
    const options = {
      method: "GET",
      url:
        "https://moviesdatabase.p.rapidapi.com/titles/search/title/" +
        adjustNameForURL(indicators.movieName),
      params: {
        exact: "true",
        info: "base_info",
        titleType: "movie",
        // page: "2",
        // limit: "1",
      },
      headers: {
        "X-RapidAPI-Key": "f3656b32fdmshfc9fb865df5f9e7p1e2d78jsnfbeef42ce952",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //   if (data.results.length != 0) console.log(data.results[0].primaryImage.url);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        height: "100vh",
      }}
    >
      <Typography variant="h4">Results for the Movie...</Typography>
      <Box
        sx={{ display: "flex", justifyContent: "space-around", width: "100%" }}
      >
        {[1, 2, 3, 4].map((number, index) => {
          return (
            <Grow
              key={index}
              in={animate}
              {...(animate ? { timeout: 1000 * number } : {})}
            >
              <Card
                elevation={4}
                sx={{
                  width: 346,
                  height: 733,
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    minHeight: "30%",
                    height: "30%",
                    overflow: "hidden",
                    transition: "height 1.0s ease",
                    "&:hover": {
                      transition: "height 1.0s ease",
                      height: "70%",
                    },
                  }}
                >
                  <img
                    style={{
                      bottom: 100,
                    }}
                    src={data?.results[0].primaryImage?.url}
                    width={"100%"}
                  />
                </Box>
                <CardHeader
                  title={data?.results[0].titleText.text}
                  subheader="Comedy"
                  action={
                    <IconButton size="large">
                      <StarSharp fontSize="inherit" />
                    </IconButton>
                  }
                />
                <CardContent>
                  <Typography
                    variant="body1"
                    textAlign={"center"}
                    height={210}
                    overflow={"hidden"}
                  >
                    {data?.results[0].plot.plotText.plainText}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    padding: 0,
                    paddingBlock: 5,
                    alignSelf: "flex-end",
                  }}
                >
                  <Box>
                    <Rating readOnly value={2.5} precision={0.5} />
                  </Box>
                  <Box
                    sx={{
                      mt: 2,
                      mr: 1,
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-around",
                    }}
                  >
                    <Chip avatar={<Avatar>N</Avatar>} label="Netflix" />
                    <Chip avatar={<Avatar>P</Avatar>} label="Prime" />
                    <Chip avatar={<Avatar>D</Avatar>} label="Disney+" />
                    <Chip avatar={<Avatar>H</Avatar>} label="HBO" />
                  </Box>
                </CardActions>
              </Card>
            </Grow>
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Button
          variant="contained"
          disableElevation
          sx={{
            position: "absolute",
            left: 10,
            backgroundColor: "black",
            paddingInline: 5,
            paddingBlock: 2,
            "&:hover": {
              backgroundColor: "grey",
              color: "black",
            },
          }}
          onClick={() => navigate("../movieRecommend")}
        >
          Make a new search
        </Button>
        <Pagination count={10} />
      </Box>
    </Box>
  );
}
