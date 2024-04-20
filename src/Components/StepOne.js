import { Box, Button, TextField, Typography } from "@mui/material";

export default function StepConnector({ onClick = () => {} }) {
  return (
    <Box
      sx={{
        // margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "50%",
      }}
    >
      <Typography variant="h2">Movie Recommendation System</Typography>
      <TextField
        autoComplete="off"
        // sx={{ width: 20 }}
        variant="outlined"
        label="Movie Name"
        helperText="Type a movie name to find the similiar one."
      />
      <Button
        variant="contained"
        disableElevation
        color="primary"
        sx={{
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
