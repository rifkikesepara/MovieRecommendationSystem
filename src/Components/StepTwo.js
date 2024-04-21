import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function StepTwo({ formik, onClick = () => {} }) {
  const [selectValue, setSelectValue] = useState("");
  const [sliderValue, setSliderValue] = useState([1800, 2024]);
  const [error, setError] = useState(false);

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/titles/utils/genres",
      headers: {
        "X-RapidAPI-Key": "f3656b32fdmshfc9fb865df5f9e7p1e2d78jsnfbeef42ce952",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => setGenres(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box
      sx={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "50%",
      }}
    >
      <Typography variant="h2" marginBottom={3}>
        Movie Recommendation System
      </Typography>
      <FormControl variant="outlined" error={error}>
        <InputLabel id="demo-simple-select-label">Movie Genre</InputLabel>
        <Select
          error={error}
          name="movieGenre"
          label="Movie Genre"
          sx={{
            width: 250,
          }}
          value={selectValue}
          onChange={(e) => {
            setSelectValue(e.target.value);
            formik.handleChange(e);
          }}
        >
          {genres.map((name, index) => {
            if (name != null)
              return (
                <MenuItem key={index} value={name}>
                  {name}
                </MenuItem>
              );
          })}
        </Select>
        {error && <FormHelperText>Please select a movie genre.</FormHelperText>}
      </FormControl>
      <InputLabel id="demo-simple-select-label" sx={{ marginTop: 3 }}>
        Movie Year
      </InputLabel>
      <Slider
        name="movieYear"
        sx={{
          color: "grey",
          height: 8,
          width: "50%",
          "& .MuiSlider-track": {
            border: "none",
          },
          "& .MuiSlider-thumb": {
            height: 24,
            width: 24,
            backgroundColor: "#fff",
            border: "2px solid currentColor",
            "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
              boxShadow: "inherit",
            },
            "&::before": {
              display: "none",
            },
          },
          "& .MuiSlider-valueLabel": {
            lineHeight: 1.2,
            fontSize: 12,
            background: "unset",
            padding: 0,
            width: 32,
            height: 32,
            borderRadius: "50% 50% 50% 0",
            backgroundColor: "grey",
            transformOrigin: "bottom left",
            transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
            "&::before": { display: "none" },
            "&.MuiSlider-valueLabelOpen": {
              transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
            },
            "& > *": {
              transform: "rotate(45deg)",
            },
          },
        }}
        value={sliderValue}
        onChange={(e, newValue) => {
          setSliderValue(newValue);
          formik.handleChange(e);
        }}
        valueLabelDisplay="auto"
        min={1800}
        max={2024}
        marks
        step={10}
      />
      <Button
        variant="contained"
        disableElevation
        color="primary"
        sx={{
          mt: 3,
          backgroundColor: "black",
          paddingInline: 5,
          paddingBlock: 2,
          "&:hover": {
            backgroundColor: "grey",
            color: "black",
          },
        }}
        onClick={(e) => {
          if (formik.values.movieGenre != "") onClick(e);
          else setError(true);
        }}
      >
        Next
      </Button>
    </Box>
  );
}
