import React from 'react';
import {
    TextField,
    MenuItem,
    Select,
    InputLabel,
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Stack,
    Button,
    IconButton
} from '@mui/material';

const LeadGeneration = () => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] backdrop-blur-sm z-50 flex items-center justify-center">           


            <div className="bg-white w-[900px] max-h-[90vh] overflow-y-auto !px-8 !py-8 rounded-lg shadow-lg flex flex-col gap-6 ">
                <h2 className="text-2xl font-semibold text-center">Lead Generation</h2>

                <div className="gap-6 w-full grid grid-cols-2">
                    {/* Form Fields */}
                    <FormControl component="fieldset" fullWidth>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <FormLabel sx={{ fontSize: '16px' }}>Is it a Lead?</FormLabel>
                            <RadioGroup row defaultValue="">
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </Stack>
                    </FormControl>

                    <TextField label="Date" type="date" InputLabelProps={{ shrink: true }} fullWidth />
                    <TextField label="Entry Made By" fullWidth />
                    <TextField label="BD Manager Name" fullWidth />
                    <TextField label="Lead Generation Date" type="date" InputLabelProps={{ shrink: true }} fullWidth />
                    <TextField label="Client Name" fullWidth />
                    <TextField label="Contact Person" fullWidth />
                    <TextField label="Email ID" fullWidth />
                    <TextField label="Contact Number" fullWidth />
                    <TextField label="Reference" fullWidth />
                    <TextField label="Website" fullWidth />

                    <FormControl fullWidth>
                        <InputLabel>Status</InputLabel>
                        <Select label="Status" defaultValue="">
                            <MenuItem value="New">New</MenuItem>
                            <MenuItem value="In Progress">In Progress</MenuItem>
                            <MenuItem value="Closed">Closed</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel>Overall Status</InputLabel>
                        <Select label="Overall Status" defaultValue="">
                            <MenuItem value="Hot">Hot</MenuItem>
                            <MenuItem value="Warm">Warm</MenuItem>
                            <MenuItem value="Cold">Cold</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel>BD Manager Assigned</InputLabel>
                        <Select label="BD Manager Assigned" defaultValue="">
                            <MenuItem value="Manager A">Manager A</MenuItem>
                            <MenuItem value="Manager B">Manager B</MenuItem>
                            <MenuItem value="Manager C">Manager C</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField label="Comments" fullWidth multiline rows={3} />
                    <TextField label="Updated Status Comments" fullWidth />
                    <TextField label="Date of Future Contact" type="date" InputLabelProps={{ shrink: true }} fullWidth />
                    <TextField label="Initial Proposal Date" type="date" InputLabelProps={{ shrink: true }} fullWidth />
                    <TextField label="Future Proposal Date" type="date" InputLabelProps={{ shrink: true }} fullWidth />

                    <FormControl fullWidth>
                        <InputLabel>Deleted Tag</InputLabel>
                        <Select label="Deleted Tag" defaultValue="">
                            <MenuItem value="true">True</MenuItem>
                            <MenuItem value="false">False</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-4 ">
                    <Button variant="contained" color="primary">
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LeadGeneration;
