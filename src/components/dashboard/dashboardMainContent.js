import React from "react";
import { Box, Grid } from "@mui/material";
import BodyDiagram from "../bodyDiagram";
import Calendar from "../calendar";
import Schedule from "../schedule";
import ActivityChart from "../activityChart";
import HealthStatus from "../healthStatus";
import Sidebar from "../sidebar";

export default function Dashboard() {
  return (
    <Box sx={{
      display: 'flex',
      p: 3,
      bgcolor: '#E5F0FA',
      minHeight: '100vh',
      gap: 3
    }}>
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content area */}
      <Box sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }}>
        {/* Top row with BodyDiagram and HealthStatus */}
        <Grid container spacing={3} sx={{ height: '20rem' }}>
          <Grid item xs={15}>
            <BodyDiagram />
          </Grid>
          <Grid item xs={15}>
            <HealthStatus />
          </Grid>
        </Grid>
        
        {/* Activity chart */}
        <Box>
          <ActivityChart />
        </Box>
      </Box>
      
      {/* Right sidebar with Calendar and Schedule */}
      <Box sx={{
        width: '30rem',
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }}>
        <Calendar />
        <Schedule />
      </Box>
    </Box>
  );
}