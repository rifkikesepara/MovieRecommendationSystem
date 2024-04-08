import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  MenuItem,
  Paper,
  Select,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import { CheckBox } from "@mui/icons-material";
import { useState } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function valuetext(value) {
  return `${value}°C`;
}

function App() {
  const items = [
    {
      name: "Test",
    },
    {
      name: "Deneme",
    },
    {
      name: "Rifki",
    },
    {
      name: "Zafer",
    },
    {
      name: "Test",
    },
    {
      name: "Deneme",
    },
    {
      name: "Rifki",
    },
    {
      name: "Zafer",
    },
    {
      name: "Test",
    },
    {
      name: "Deneme",
    },
    {
      name: "Rifki",
    },
    {
      name: "Zafer",
    },
  ];

  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Movie Recommendation System
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Movie Name"
            name="email"
            autoComplete="off"
          />
          <TextField
            margin="normal"
            fullWidth
            name="Movie Genre"
            label="Movie Genre"
            id="password"
          />
          <Box>
            <Typography>Movie Year</Typography>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Box>

          {/* <Select>
            <MenuItem>Test1</MenuItem>
            <MenuItem>Test2</MenuItem>
            <MenuItem>Test3</MenuItem>
            <MenuItem>Test4</MenuItem>
            <MenuItem>Test5</MenuItem>
          </Select> */}
          {/* <FormControlLabel
            control={<CheckBox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Find the movies
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

export default App;
