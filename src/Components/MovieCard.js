import { Info } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Grow,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";

export default function MovieCard({
  key,
  animate,
  title,
  genres,
  release_date,
  score,
}) {
  const getAllGenres = (genres) => {
    let stringgenre = "";
    genres.map((genre) => (stringgenre += genre.toUpperCase() + ", "));
    return stringgenre;
  };
  return (
    <Grow key={key} in={animate} {...(animate ? { timeout: 1000 } : {})}>
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
                href={"https://www.google.com/search?q=" + title + "+movie"}
                target="_blank"
                sx={{ fontSize: 30 }}
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
            <Rating readOnly value={parseFloat(score) / 2} precision={0.5} />
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
}
