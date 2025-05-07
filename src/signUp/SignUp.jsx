import React from 'react';
import { Box, Card, CardContent, Typography, TextField, Link, Button, Checkbox, FormControlLabel } from '@mui/material';
import bgimg from "../assets/background.webp";

const SignUp = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        
        height="100%"
        sx={{ backdropFilter: 'brightness(0.9)' }}
      >
        <Card sx={{ width: 400, p: 3, boxShadow: 3, borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h5" textAlign="center" gutterBottom>
              Sign Up
            </Typography>

            <TextField fullWidth label="Full Name" margin="normal" variant="outlined" />
            <TextField fullWidth label="Email" type="email" margin="normal" variant="outlined" />
            <TextField fullWidth label="Username" margin="normal" variant="outlined" />
            <TextField fullWidth label="Password" type="password" margin="normal" variant="outlined" />
            <TextField fullWidth label="Confirm Password" type="password" margin="normal" variant="outlined" />

            <FormControlLabel
              control={<Checkbox name="terms" color="primary" />}
              label="I agree to the terms and conditions"
              sx={{ mt: 1 }}
            />

            <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
              Sign Up
            </Button>

            <Box textAlign="center" mt={2}>
              <Typography variant="body2">
                Already have an account? <Link href="/login">Login</Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default SignUp;
