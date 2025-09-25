import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import NumberCircle from "../common/NumberCircle";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const Teacher = () => {
  const [options, setOptions] = useState([]);
  const [optionName, setOptionName] = useState("");

  const handleOptionChange = (e) => {
    setOptionName(e.target.value);
  };

  const handleRadioButtonChange = (index, value) => {
    const tempOptions = [...options];
    tempOptions[index].isCorrect = value; // set the clicked value
    setOptions(tempOptions);
  };

  const handleAdd = () => {
    if(!optionName){
      alert("Please enter option to add");
      return;
    }
    const tempOptions = [...options];
    tempOptions.push({
      id: options.length + 1,
      name: optionName,
      isCorrect: null,
    });
    setOptions(tempOptions);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start", // pushes content to right
        alignItems: "flex-start", // pushes content to top
        height: "100vh", // full height of viewport
        padding: "16px",
        position: "absolute",
        left: 2,
        top: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: 4,
        }}
      >
        <Box>
          <Button variant="contained">Intervue Poll</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <Box>
            <Typography display="inline" fontSize={30}>
              Let's{" "}
            </Typography>
            <Typography display="inline" fontSize={30} fontWeight="bold">
              Get Started
            </Typography>
          </Box>
          <Typography fontSize={15} fontWeight={300} color="#00000080">
            you’ll have the ability to create and manage polls, ask questions,
            and monitor your students' responses in real-time.
          </Typography>
        </Box>
        <Box>
          <Typography> Enter your question</Typography>
        </Box>
        <Box>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            style={{ width: 500 }}
            value={optionName}
            onChange={handleOptionChange}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: 10,
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <Typography fontWeight={"bold"}>Enter Options</Typography>
              <Typography fontWeight={"bold"}>Is it correct?</Typography>
            </Box>
            <Box>
              {options.map((option, index) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: 5,
                    }}
                  >
                    <NumberCircle value={option.id} />
                    <Box
                      width={150}
                      height={80} // you can adjust height
                      sx={{
                        overflowY: "auto", // vertical scroll
                        overflowX: "hidden", // prevent horizontal scroll
                        whiteSpace: "normal", // allow wrapping
                        wordWrap: "break-word", // break long words if needed
                        textAlign:"center"
                      }}
                    >
                      <Typography>{option.name}</Typography>
                    </Box>

                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name={`controlled-radio-buttons-group-${index}`}
                      value={option.isCorrect || ""}
                      onChange={(e) =>
                        handleRadioButtonChange(index, e.target.value)
                      }
                      row
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="no"
                      />
                    </RadioGroup>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box>
          <Button variant="contained" onClick={handleAdd}>
            Add more options
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Teacher;
