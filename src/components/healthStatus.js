import React from "react";
import { Card, Box, Typography } from "@mui/material";

const HealthStatus = () => {
  const data = [
    {
      part: "Lungs",
      color: "#16A34A",
      width: "100%",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lungs_diagram_detailed.svg/1200px-Lungs_diagram_detailed.svg.png",
    },
    {
      part: "Teeth",
      color: "#16A34A",
      width: "100%",
      image: "https://asset3.toothsi.in/open_bite_ai_layer_84f9911f4d_6a4c3b466b.png?q=75&w=3840",
    },
    {
      part: "Bone",
      color: "#EF4444",
      width: "100%",
      image: "https://i.pinimg.com/736x/cf/a8/2b/cfa82b6e85ad9a31beb6df5c67e3aeb4.jpg",
    },
  ];

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column", gap: 1 }}>
      {data.map(({ part, color, width, image }, i) => (
        <Card
          key={i}
          sx={{
            p: 4,
            borderRadius: 2,
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            border: "none",
            bgcolor: "white",
            minHeight: "5rem",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <img
                src={image}
                alt={part}
                style={{
                  width: 32, 
                  height: 32, 
                  objectFit: "contain",
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: "0.85rem",
                    color: "#374151",
                    mb: 0.25,
                  }}
                >
                  {part}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.65rem",
                    color: "#6B7280",
                  }}
                >
                  Date: 25 May 2025
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "4rem",
                height: "0.75rem",
                bgcolor: "#E5E7EB",
                borderRadius: "9999px",
              }}
            >
              <Box
                sx={{
                  width: width,
                  height: "100%",
                  bgcolor: color,
                  borderRadius: "9900px",
                }}
              />
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default HealthStatus;