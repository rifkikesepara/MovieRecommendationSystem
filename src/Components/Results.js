import { Info } from "@mui/icons-material";
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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Results() {
  const navigate = useNavigate();

  const data = JSON.parse(sessionStorage.getItem("recommendation"));
  const [animate, setAnimate] = useState(false);
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setStartIndex(page);
      setAnimate(true);
    }, 200);
  }, [page]);

  const getAllGenres = (genres) => {
    let stringgenre = "";
    genres.map((genre) => (stringgenre += genre.toUpperCase() + ", "));
    return stringgenre;
  };

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
      {!data.length && (
        <Typography variant="h2">No Movies Found to Recommend</Typography>
      )}
      {data.length > 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {data
            .slice(6 * (startIndex - 1), startIndex * 6)
            .map(({ title, genres, score, release_date }, index) => {
              return (
                <Grow
                  key={index}
                  in={animate}
                  {...(animate ? { timeout: 1000 * (index + 1) } : {})}
                >
                  <Card
                    elevation={4}
                    sx={{
                      width: 346,
                      // height: 733,
                      position: "relative",
                      mb: 4,
                    }}
                  >
                    <CardHeader
                      title={title}
                      subheader={getAllGenres(genres)}
                      action={
                        <>
                          <IconButton
                            href={"https://www.google.com/search?q=" + title}
                            target="_blank"
                            sx={{ fontSize: 30, color: "black " }}
                          >
                            <Info
                              sx={{
                                fontSize: "inherit",
                              }}
                            />
                          </IconButton>
                        </>
                      }
                    />
                    <CardContent sx={{ p: 0 }}>
                      <Typography
                        variant="h5"
                        textAlign={"center"}
                        // height={210}
                        overflow={"hidden"}
                      >
                        {release_date.split("-")[0]}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        padding: 0,
                        paddingBottom: 5,
                        alignSelf: "flex-end",
                      }}
                    >
                      <Box>
                        <Rating
                          readOnly
                          value={parseFloat(score) / 2}
                          precision={0.5}
                        />
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
        <Pagination
          count={parseInt(data.length / 5)}
          onChange={(e, p) => {
            setAnimate(false);
            setPage(p);
          }}
        />
      </Box>
    </Box>
  );
}
