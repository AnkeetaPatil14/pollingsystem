import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function NumberCircle({value}) {
  return (
    <Box
      sx={{
        width: 30,
        height: 30,
        borderRadius: "50%", // makes it a circle
        backgroundColor: "#7765DA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
        {value}
      </Typography>
    </Box>
  );
}
