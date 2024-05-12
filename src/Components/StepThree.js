import { DeleteOutline, KeyTwoTone, Label } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";

export default function StepThree({ onClick = () => {} }) {
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
        onKeyDown={(e) => {
          if (e.key == "Enter") e.preventDefault();
        }}
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
              key.preventDefault();
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
        type="submit"
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
      >
        Search
      </Button>
    </Box>
  );
}
