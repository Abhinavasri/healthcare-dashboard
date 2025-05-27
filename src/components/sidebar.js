import React from "react";
import { Box, Typography } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventIcon from '@mui/icons-material/Event';
import BarChartIcon from '@mui/icons-material/BarChart';
import ChatIcon from '@mui/icons-material/Chat';
import SupportIcon from '@mui/icons-material/Support';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  const menuItems = [
    { icon: <DashboardIcon />, label: 'Dashboard' },
    { icon: <HistoryIcon />, label: 'History' },
    { icon: <CalendarTodayIcon />, label: 'Calendar' },
    { icon: <EventIcon />, label: 'Appointments' },
    { icon: <BarChartIcon />, label: 'Statistics' },
    { icon: <ChatIcon />, label: 'Chat' },
    { icon: <SupportIcon />, label: 'Support' },
    { icon: <SettingsIcon />, label: 'Setting' },
  ];

  return (
    <Box sx={{
      width: '15%',
      bgcolor: 'white',
      p: 3,
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 3rem)',
    }}>
      <Typography variant="h4" sx={{
        fontWeight: 'bold',
        color: '#2563EB',
        mb: 4,
        fontSize: '1.5rem',
      }}>
        Healthcare.
      </Typography>

      <Box component="nav" sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        color: '#4B5563',
      }}>
        {menuItems.map((item, index) => (
          <Box key={index} sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            py: 0.5,
            color: item.label === 'Dashboard' ? '#2563EB' : '#4B5563',
            fontWeight: item.label === 'Dashboard' ? 'bold' : 'normal',
            fontSize: '0.875rem',
            '&:hover': { color: '#2563EB', cursor: 'pointer' }
          }}>
            {React.cloneElement(item.icon, { sx: { fontSize: 18 } })}
            <Typography sx={{ fontSize: '0.875rem' }}>{item.label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;