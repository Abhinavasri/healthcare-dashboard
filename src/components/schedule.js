import React from "react";
import { Card, Typography, Box } from "@mui/material";
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PsychologyIcon from '@mui/icons-material/Psychology';

const Schedule = () => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
    <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: 600, color: "#374151" }}>
      The Upcoming Schedule
    </Typography>
    
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
      <Typography sx={{ fontSize: "0.875rem", fontWeight: 600, color: "#374151" }}>
        On Thursday
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1.5, fontSize: "0.75rem" }}>
        <Card sx={{ p: 1.5, bgcolor: "#DBEAFE", borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography sx={{ fontSize: "0.75rem", color: "#374151" }}>Health checkup complete</Typography>
            <Typography sx={{ fontSize: "0.75rem", color: "#6B7280" }}>11:00 AM</Typography>
          </Box>
          <MedicalServicesIcon sx={{ color: '#3B82F6', fontSize: 16 }} />
        </Card>
        <Card sx={{ p: 1.5, bgcolor: "#E0E7FF", borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography sx={{ fontSize: "0.75rem", color: "#374151" }}>Ophthalmologist</Typography>
            <Typography sx={{ fontSize: "0.75rem", color: "#6B7280" }}>14:00 PM</Typography>
          </Box>
          <VisibilityIcon sx={{ color: '#6366F1', fontSize: 16 }} />
        </Card>
      </Box>
      
      <Typography sx={{ fontSize: "0.875rem", fontWeight: 600, color: "#374151", mt: 1 }}>
        On Saturday
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1.5, fontSize: "0.75rem" }}>
        <Card sx={{ p: 1.5, bgcolor: "#FECACA", borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography sx={{ fontSize: "0.75rem", color: "#374151" }}>Cardiologist</Typography>
            <Typography sx={{ fontSize: "0.75rem", color: "#6B7280" }}>12:00 AM</Typography>
          </Box>
          <FavoriteIcon sx={{ color: '#EF4444', fontSize: 16 }} />
        </Card>
        <Card sx={{ p: 1.5, bgcolor: "#DDD6FE", borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography sx={{ fontSize: "0.75rem", color: "#374151" }}>Neurologist</Typography>
            <Typography sx={{ fontSize: "0.75rem", color: "#6B7280" }}>16:00 PM</Typography>
          </Box>
          <PsychologyIcon sx={{ color: '#8B5CF6', fontSize: 16 }} />
        </Card>
      </Box>
    </Box>
  </Box>
);

export default Schedule;