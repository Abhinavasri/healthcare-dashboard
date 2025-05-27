import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";

const BodyDiagram = () => (
  <Card
    sx={{
      flex: 1,
      p: 6,
      borderRadius: 2,
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      border: "none",
      bgcolor: "white",
      height: "80%",
      maxWidth: "30rem",
    }}
  >
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        height: "100%",
        p: 0, 
      }}
    >
      <img
        src="https://media.istockphoto.com/id/459951679/photo/male-anatomy-view.jpg?s=612x612&w=0&k=20&c=-T2Zk12yDJgrF3T2XPz80ThaC_vZKh-s7qCYQwXNAXA="
        alt="Body Diagram"
        style={{
          width: "100%", 
          height: "auto", 
          maxHeight: "17rem", 
          objectFit: "contain",
        }}
      />
      {/* Healthy Heart Label */}
      <Box sx={{ position: "absolute", top: "3rem", left: "1.5rem", display: "flex", alignItems: "center" }}>
        <Box sx={{ width: 8, height: 8, bgcolor: "#3B82F6", borderRadius: "50%", position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "100%",
              width: "1rem",
              height: "1px",
              bgcolor: "#3B82F6",
              transform: "translateY(-50%)",
            }}
          />
        </Box>
        <Box sx={{ ml: 2, bgcolor: "#3B82F6", borderRadius: "9999px", px: 1.5, py: 0.25 }}>
          <Typography sx={{ color: "white", fontSize: "0.65rem", fontWeight: 500, textTransform: "none" }}>
            Healthy Heart
          </Typography>
        </Box>
      </Box>
      {/* Healthy Leg Label */}
      <Box sx={{ position: "absolute", top: "12rem", right: "1.5rem", display: "flex", alignItems: "center" }}>
        <Box sx={{ bgcolor: "#3B82F6", borderRadius: "9999px", px: 1.5, py: 0.25 }}>
          <Typography sx={{ color: "white", fontSize: "0.65rem", fontWeight: 500, textTransform: "none" }}>
            Healthy Leg
          </Typography>
        </Box>
        <Box sx={{ width: 8, height: 8, bgcolor: "#3B82F6", borderRadius: "50%", position: "relative", ml: 1 }}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              right: "100%",
              width: "1rem",
              height: "1px",
              bgcolor: "#3B82F6",
              transform: "translateY(-50%)",
            }}
          />
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default BodyDiagram;