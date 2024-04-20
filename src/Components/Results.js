import { Star, StarSharp } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Fade,
  Grow,
  IconButton,
  Pagination,
  Rating,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Results() {
  const [animate, setAnimate] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1000);
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/titles/search/title/The%20Flash",
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
      <Typography variant="h4">Resluts for the Movie....</Typography>
      <Box
        sx={{ display: "flex", justifyContent: "space-around", width: "100%" }}
      >
        {[1, 2, 3, 4].map((number) => {
          return (
            <Grow in={animate} {...(animate ? { timeout: 1000 * number } : {})}>
              <Card
                elevation={4}
                sx={{
                  width: 346,
                  height: 733,
                }}
              >
                {/* <CardMedia
                component="img"
                height="240"
                src={data?.results[0].primaryImage.url}
                sx={{
                  backgroundColor: "#707070",
                  transition: "transform 2.0s ease",
                  "&:hover": {
                    transition: "transform 2.0s ease",
                    transform: "scale(0.5)",
                  },
                }}
              /> */}
                <Box
                  sx={{
                    height: 240,
                    overflow: "hidden",
                    transition: "height 2.0s ease",
                    "&:hover": {
                      transition: "height 2.0s ease",
                      height: "70%",
                    },
                    //   backgroundImage: "data?.results[0].primaryImage.url",
                  }}
                >
                  <img
                    style={{
                      bottom: 100,
                    }}
                    src={data?.results[0].primaryImage.url}
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
                  <Typography variant="body1" textAlign={"center"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus sodales bibendum felis id consequat. Maecenas lacus
                    ligula, lobortis in placerat sit amet, mattis vel dolor. In
                    eleifend dictum iaculis. Vivamus tempor ex ac justo rutrum,
                    id iaculis sem convallis. Nullam vitae velit sit amet lectus
                    vestibulum iaculis. Etiam at diam sit amet orci porta
                    feugiat id sit amet leo. In hac habitasse platea dictumst.
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
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
      <Pagination count={10} />
    </Box>
  );
}
