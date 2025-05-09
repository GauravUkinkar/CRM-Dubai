import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DescriptionIcon from '@mui/icons-material/Description';
import { useLocation, useNavigate } from 'react-router-dom';

const navigationItems = [
  {
    segment: 'home',
    title: 'Home',
    icon: <DescriptionIcon />,
  },
  {
    segment: 'about',
    title: 'About Us',
    icon: <DescriptionIcon />,
  },
];

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        width: 240,
        bgcolor: 'background.paper',
        height: '100vh',
        borderRight: '1px solid #ddd',
        pt: 2,
      }}
    >
      <List>
        {navigationItems.map((item) => (
          <ListItem
            button
            key={item.segment}
            selected={location.pathname === `/${item.segment}`}
            onClick={() => navigate(`/${item.segment}`)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

SideBar.propTypes = {
  window: PropTypes.func,
};

export default SideBar;
