import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function StepTwo({ onClick = () => {} }) {
  const [selectValue, setSelectValue] = useState("");

  const [sliderValue, setSliderValue] = useState([1800, 2024]);
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
      <Typography variant="h2">Movie Recommendation System</Typography>
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-label">Movie Genre</InputLabel>
        <Select
          label="Movie Genre"
          sx={{
            width: 200,
          }}
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <MenuItem value={"Comedy"}>Comedy</MenuItem>
          <MenuItem value={"Drama"}>Drama</MenuItem>
          <MenuItem value={"Sci-fi"}>Sci-fi</MenuItem>
          <MenuItem value={"Horror"}>Horror</MenuItem>
        </Select>
      </FormControl>
      <InputLabel id="demo-simple-select-label" sx={{ marginTop: 3 }}>
        Movie Year
      </InputLabel>
      <Slider
        sx={{
          color: "grey",
          height: 8,
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
        onChange={(e, newValue) => setSliderValue(newValue)}
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
        onClick={onClick}
      >
        Next
      </Button>
    </Box>
  );
}
