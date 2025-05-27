import React from "react";
import { Card, Box, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const Calendar = () => (
  <Card
    sx={{
      p: 2,
      borderRadius: 2,
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      border: "none",
      bgcolor: "white",
    }}
  >
    {/* Header */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 5,
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "0.875rem",
          color: "#374151",
        }}
      >
        May 2025
      </Typography>
      <PersonIcon sx={{ color: "#3B82F6", fontSize: 18 }} />
    </Box>

    {/* Calendar Grid */}
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        textAlign: "center",
        fontSize: "0.75rem",
        gap: 1,
        color: "#6B7280",
        mb: 2,
      }}
    >
      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => (
        <Typography key={i} sx={{ fontSize: "0.75rem", color: "#6B7280" }}>
          {d}
        </Typography>
      ))}
      {[25, 26, 27, 28, 29, 30, 31].map((day, i) => (
        <Box
          key={i}
          sx={{
            p: 0.5,
            borderRadius: "50%",
            bgcolor: day === 27 ? "#3B82F6" : "transparent",
            color: day === 27 ? "white" : "#6B7280",
            fontWeight: day === 27 ? 600 : "normal",
            textAlign: "center",
          }}
        >
          {day}
        </Box>
      ))}
    </Box>

    {/* Time slots */}
    <Box sx={{ fontSize: "0.75rem", color: "#6B7280" }}>
      {[
        ["10:00", "08:00", "—", "10:00", "—", "12:00", "09:00"],
        ["11:00", "09:00", "—", "13:00", "14:00", "14:00", "10:00"],
        ["12:00", "10:00", "13:00", "—", "16:00", "15:00", "11:00"],
      ].map((row, idx) => (
        <Box key={idx} sx={{ display: "flex", justifyContent: "space-between", mt: idx > 0 ? 1 : 0 }}>
          {row.map((time, i) => (
            <Typography key={i} sx={{ fontSize: "0.75rem" }}>
              {time}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>

    {/* New Section: Upcoming Appointments */}
    <Box sx={{ mt: 2 }}>
      <Typography
        sx={{
          fontSize: "0.75rem",
          fontWeight: 800,
          color: "#374151",
          mb: 1,
        }}
      >
        Upcoming Appointments
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ fontSize: "0.75rem", color: "#374151" }}>
            Dentist Appointment
          </Typography>
          <Typography sx={{ fontSize: "0.75rem", color: "#6B7280" }}>
            May 28, 10:00 AM
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ fontSize: "0.75rem", color: "#374151" }}>
            Physiotherapy Appointment
          </Typography>
          <Typography sx={{ fontSize: "0.75rem", color: "#6B7280" }}>
            May 29, 2:00 PM
          </Typography>
        </Box>
      </Box>
    </Box>
  </Card>
);

export default Calendar;