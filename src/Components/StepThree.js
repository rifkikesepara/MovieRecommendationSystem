import { DeleteOutline, Label } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StepThree({ onClick = () => {} }) {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [actors, setActors] = useState([]);
  const scrollRef = useRef(null);

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
        sx={{ width: 350 }}
        variant="outlined"
        label="Director Name"
        helperText="Enter the director that the movie is directed by."
      />
      <Box sx={{ display: "block" }}>
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
          sx={{ mt: 2, width: 350 }}
          variant="outlined"
          label="Actor Name"
          helperText="Enter the actor that you want to see in the movie."
          onKeyDown={(key) => {
            if (key.code == "Enter") {
              let arr = actors;
              arr.push(input);
              setActors(arr);
              setInput("");
              console.log(scrollRef);
              if (scrollRef.current) {
                setTimeout(() => {
                  scrollRef.current.scrollIntoView({ behavior: "smooth" });
                }, 200);
              }
            }
          }}
        />
        <Typography textAlign={"center"} marginTop={2}>
          Actors
        </Typography>
        <Paper elevation={3}>
          <List
            sx={{
              height: 100,
              overflowY: "scroll",
            }}
          >
            {actors.map((name) => {
              return (
                <ListItem
                  ref={scrollRef}
                  disablePadding
                  secondaryAction={
                    <IconButton>
                      <DeleteOutline />
                    </IconButton>
                  }
                >
                  <ListItemButton
                    role="undefined"
                    dense
                    onClick={() => console.log(name)}
                  >
                    <ListItemText>{name}</ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Paper>
      </Box>
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
        onClick={() => navigate("../search")}
      >
        Search
      </Button>
    </Box>
  );
}
