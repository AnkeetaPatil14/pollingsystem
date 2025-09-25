import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const card = [
    {
      id: 1,
      header: "I’m a Student",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 2,
      header: "I’m a Teacher",
      content: "Submit answers and view live poll results in real-time.",
    },
  ];

  const handleContinue = () => {
    if (selected === 1) {
      navigate("/student");
    } else {
      navigate("/teacher");
    }
  };

  return (
    <div>
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
                Welcome to the{" "}
              </Typography>
              <Typography display="inline" fontSize={30} fontWeight="bold">
                Live Polling System
              </Typography>
            </Box>
            <Typography fontSize={15} fontWeight={300} color="#00000080">
              Please select the role that best describes you to begin using the
              live polling system
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            display="flex"
            gap={2}
            justifyContent="flex-start"
            alignItems={"flex-start"}
          >
            {card.map((card) => (
              <Card
                key={card.id}
                onClick={() => setSelected(card.id)}
                sx={{
                  flex: 1,
                  cursor: "pointer",
                  border: "2px solid",
                  borderColor: selected === card.id ? "#7765DA" : "transparent",
                  borderRadius: 3,
                  boxShadow: selected === card.id ? 4 : 1,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: 6,
                  },
                  width: "350px",
                }}
              >
                <CardContent>
                  <Typography variant="h6">{card.header}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.content}.
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
        <Box>
          <Button variant="contained" onClick={handleContinue}>
            Continue
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
