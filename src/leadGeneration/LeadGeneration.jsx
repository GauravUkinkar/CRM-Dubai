import React from 'react';
import bgimg from "../assets/background.webp";
import {
    Box,
    TextField,
    Button,
    Typography,
    Grid,
    useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const LeadGeneration = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                backgroundImage: `url(${bgimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 2,
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 600,
                    bgcolor: 'white',
                    p: 4,
                    display: 'flex',
                    flexDirection:"column",
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 3,
                    boxShadow: 3,
                }}
            >
                <Typography variant="h5" gutterBottom textAlign="left" pb={2}>
                    Lead Generation Form
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Company Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Lead's Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Email" type="email" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Phone Number" type="tel" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Reference" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Date"
                            type="date"
                            defaultValue={currentDate}
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Website URL" type="url" variant="outlined" />
                    </Grid>
                    
                        <TextField
                            fullWidth
                            label="Feedback / Comments"
                            variant="outlined"
                            multiline
                            rows={4}
                        />                   

                  
                        <input type="hidden" name="entryDate" value={currentDate} />
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                bgcolor: '#f57c00',
                                '&:hover': { bgcolor: '#ef6c00' },
                                mt: 1
                            }}
                        >
                            Submit
                        </Button>
                   
                </Grid>
            </Box>
        </Box>
    );
};

export default LeadGeneration;
