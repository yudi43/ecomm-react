import * as React from 'react';
import { Box, Button, Toolbar, Typography } from '@mui/material';

export default function CategoryNavbar(props) {
  const { categories } = props;
  
  return (
    <Toolbar>
      {categories.map((category) => (
        <Button key={category} color="inherit" sx={{ mr: 1 }}>
          {category}
        </Button>
      ))}
      <Box sx={{ flexGrow: 1 }} />
      <Typography variant="h6" component="div" sx={{ mr: 2 }}>
        My Ecommerce Site
      </Typography>
    </Toolbar>
  );
}
