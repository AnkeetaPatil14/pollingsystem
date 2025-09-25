import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const Student = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleContinue = () =>{

  }

  console.log("name", name);
  return (
    
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Box>
        <Button variant="contained">Intervue Poll</Button>
      </Box>
      <Box>
        <Box>
          <Box>
            <Typography display="inline" fontSize={30}>
              Let’s{" "}
            </Typography>
            <Typography display="inline" fontSize={30} fontWeight="bold">
              Get Started
            </Typography>
          </Box>
          <Box sx={{ width: 500 }}>
            <Typography fontSize={15} fontWeight={300} color="#00000080">
              If you’re a student, you’ll be able to submit your answers,
              participate in live polls, and see how your responses compare with
              your classmates
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography> Enter your name</Typography>
        <TextField
          id="filled-basic"
          variant="filled"
          value={name}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <Button variant="contained" onClick={handleContinue}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default Student;
