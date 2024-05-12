import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function StepConnector({ formik, onClick = () => {} }) {
  const [error, setError] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "50%",
      }}
    >
      <Typography color={"primary"} variant="h2">
        Movie Recommendation System
      </Typography>
      <TextField
        name="movieName"
        autoComplete="off"
        sx={{ width: 280 }}
        variant="outlined"
        label="Movie Name"
        helperText={
          !error
            ? "Type a movie name to find the similiar one."
            : "Cannot be empty."
        }
        onChange={formik.handleChange}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            e.preventDefault();
            onClick();
          }
        }}
        error={error}
      />
      <Button
        variant="contained"
        disableElevation
        color="primary"
        sx={{
          mt: 3,
          paddingInline: 5,
          paddingBlock: 2,
        }}
        onClick={(e) => {
          if (formik.values.movieName != "") onClick(e);
          else setError(true);
        }}
      >
        Next
      </Button>
    </Box>
  );
}
