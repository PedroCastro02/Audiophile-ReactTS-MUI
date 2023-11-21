import { Label } from '@mui/icons-material'
import { Box, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

const Inputs = () => {
  return (
    <>
        <Box sx={{ width:'60%', ml: '4%'}}>
            <Typography
                variant='h1'
                sx={{fontSize: '1.8rem', fontWeight: '700', '@media (max-width: 700px)': {fontSize: '1rem', },}}>CHECKOUT
        </Typography>
        {/* BILLING DETAILS */}
                <Box>
                <Typography variant='h4' sx={{fontSize: '1rem', fontWeight: '700', mt: '2%',ml: '2%', color: '#D87C49',}}>BILLING DETAILS</Typography>   
                    <Box sx={{display: 'flex', mt:'1%'}}> 
                            <Box sx={{m: '2%'}}>
                                <Typography sx={{fontSize: '0.9rem', fontWeight: '700', mt: '2%',ml: '2%', color: 'black',}}>Name</Typography>
                                <TextField id="outlined-basic" variant="outlined" placeholder='Alexei Ward' />
                            </Box>
                            <Box sx={{m: '2%', ml:'20%'}}>
                                <Typography sx={{fontSize: '0.9rem', fontWeight: '700', mt: '2%',ml: '2%', color: 'black',}}>Email Address</Typography>
                                <TextField id="outlined-basic" variant="outlined" placeholder='alexei@mail.com' />
                            </Box>
                    </Box>
                            <Box sx={{m: '2%'}}>
                                <Typography sx={{fontSize: '0.9rem', fontWeight: '700', mt: '2%',ml: '2%', color: 'black',}}>Phone Number</Typography>
                                <TextField id="outlined-basic" variant="outlined" placeholder='+1 202-555-0136' />
                            </Box>
                </Box>
                {/* SHIPPING INFO */}
                <Box sx={{mt: '5%'}}>
                <Typography variant='h4' sx={{fontSize: '1rem', fontWeight: '700', mt: '2%',ml: '2%', color: '#D87C49',}}>SHIPPING INFO</Typography>   
                <Box sx={{ display: 'flex', flexDirection: 'column',  mr:'14.5%'}}>
                    <Typography sx={{fontSize: '0.9rem', fontWeight: '700', mt: '2%',ml: '2%', color: 'black'}}>Address</Typography>
                    <TextField id="outlined-basic" variant="outlined" placeholder='137 Williams Avenue' sx={{ml:'2%', mr:'2%'}}/>
                </Box>
                    <Box sx={{display: 'flex', mt:'1%'}}> 
                            <Box sx={{m: '2%'}}>
                                <Typography sx={{fontSize: '0.9rem', fontWeight: '700', mt: '2%',ml: '2%', color: 'black',}}>ZIP Code</Typography>
                                <TextField id="outlined-basic" variant="outlined" placeholder='10001'/>
                            </Box>
                            <Box sx={{m: '2%', ml:'20%'}}>
                                <Typography sx={{fontSize: '0.9rem', fontWeight: '700', mt: '2%',ml: '2%', color: 'black',}}>City</Typography>
                                <TextField id="outlined-basic" variant="outlined" placeholder='New York' />
                            </Box>
                    </Box>
                            <Box sx={{m:'2%'}}>
                                <Typography sx={{fontSize: '0.9rem', fontWeight: '700', mt: '2%',ml: '2%', color: 'black',}}>Country</Typography>
                                <TextField id="outlined-basic" variant="outlined" placeholder='United States' />
                            </Box>
                </Box>
                {/* PAYMENT DETAILS */}
                <Box sx={{mt: '5%'}}>
                <Typography variant='h4' sx={{fontSize: '1rem', fontWeight: '700', mt: '2%',ml: '2%', color: '#D87C49',}}>PAYMENT DETAILS</Typography>   
                
                    <Box sx={{}}> 
                    <Typography sx={{fontSize: '0.9rem', fontWeight: '700', mt: '2%',ml: '2%', color: 'black',}}>Payment Method</Typography>
                            <Box sx={{m: '2%'}}>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="e-Money" />
                                        <FormControlLabel value="male" control={<Radio />} label="Cash on Delivery" />
                                    </RadioGroup>
                                    </FormControl>
                                    
                            </Box>
                    </Box>
                    <Box sx={{ display: 'flex'}}>
                            <Box sx={{m:'2%'}}>
                                <Typography sx={{fontSize: '0.9rem', fontWeight: '700', ml: '2%', color: 'black',}}>e-Money Number</Typography>
                                <TextField id="outlined-basic" variant="outlined" placeholder='238521993'/>
                            </Box>
                            <Box sx={{ m:'2%', ml:'20%'}}>
                                <Typography sx={{fontSize: '0.9rem', fontWeight: '700', ml: '2%', color: 'black',}}>e-Money PIN</Typography>
                                <TextField id="outlined-basic" variant="outlined" placeholder='6891' />
                            </Box>
                    </Box>
                </Box>

        </Box>
    </>
  )
}

export default Inputs