import React from 'react';
import bgimg from "../assets/background.webp";
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Link,
} from '@mui/material';

const Login = () => {
    return (
        <>
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
                    <Card sx={{ width: 400, p: 2, boxShadow: 3, borderRadius: 3 }}>
                        <CardContent>
                            <Typography variant="h5" textAlign="center" gutterBottom>
                                Login
                            </Typography>
                            <TextField fullWidth label="Username" margin="normal" variant="outlined" />
                            <TextField fullWidth label="Password" type="password" margin="normal" variant="outlined" />
                            <Box textAlign="right" my={1}>
                                <Link href="#" variant="body2">Forgot Password?</Link>
                            </Box>
                            <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
                                Login
                            </Button>
                        </CardContent>
                    </Card>
                </Box>
            </Box>




        </>
    );
};

export default Login;
