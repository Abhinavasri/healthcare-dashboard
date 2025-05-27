import React from "react";
import { Card, Typography, Box } from "@mui/material";

const ActivityChart = () => {
  const data = [20, 50, 30, 40, 10, 25, 15]; 

  return (
    <Card sx={{ 
      p: 2, 
      borderRadius: 2, 
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      border: 'none',
      bgcolor: 'white',
      height: '10rem' ,
      mt: 15
    }}>
      <Typography sx={{ 
        fontWeight: 700, 
        mb: 1,
        fontSize: '0.885rem',
        color: '#374151'
      }}>
        Activity
      </Typography>
      <Typography sx={{ 
        fontSize: 12, 
        color: '#9CA3AF', 
        mb: 2 
      }}>
        3 appointments this week
      </Typography>
      <Box sx={{ 
        display: 'flex', 
        gap: 1.5, 
        alignItems: 'flex-end', 
        height: '5rem' 
      }}>
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
          <Box
            key={i}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0.5,
              justifyContent: 'flex-end',
              flex: 1
            }}
          >
            <Box
              sx={{
                width: '10%',
                height: `${data[i]}px`,
                bgcolor: '#3B82F6',
                borderTopLeftRadius: '4px',
                borderTopRightRadius: '4px',
              }}
            />
            <Typography sx={{ 
              fontSize: 12, 
              color: '#6B7280' 
            }}>
              {day}
            </Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default ActivityChart;