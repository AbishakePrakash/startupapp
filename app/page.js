"use client"

import React, { useState } from 'react'
import { Box, Button, Checkbox, Divider, FormControlLabel, Grid, Switch, TextField, Typography } from '@mui/material'
import Link from 'next/link'

export default function Home() {

  const [inputs, setInputs] = useState(null);
  const [message, setMessage] = useState(null);
  const [checked, setChecked] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    // console.log(inputs);
  };

  const handleCheck = (e) => {
    setChecked(!checked)
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    console.log('inputs', inputs);
  }

  return (
    <Grid sx={{ width: "100vw", padding: '5vw', backgroundColor: '#2C198D' }}>
      <Grid sx={{ mx: '5vw' }} >
        <Box sx={{ display: 'flex', flexDirection:{md:'row', xs:'column'} , justifyContent: 'space-between' }} >
          <Typography sx={{ mx: '1vw', my: '1vh', fontSize: '22px', fontWeight: '600', color: '#FFFFFF' }} >Startup 3</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: {md:'50px', xs:'13px'} }} >
            <Link href='/' style={{ fontWeight: {md:'600', xs:'400'} }} >Overview</Link>
            <Link href='/' style={{ fontWeight: {md:'600', xs:'400'} }} >Prices</Link>
            <Link href='/' style={{ fontWeight: {md:'600', xs:'400'} }} >Blog</Link>
            <Link href='/' style={{ fontWeight: {md:'600', xs:'400'} }} >Feedback</Link>
            <Button variant='contained' color="secondary" style={{ borderRadius: {md:'20px', xs:'5px'}, fontWeight: {md:'600', xs:''} }} >Purchase</Button>
          </Box>
        </Box>
      </Grid>
      <Grid container sx={{ mx: '5vw', mt: '10vh' }} >
        <Grid item md={6} xs={12} sx={{ pr: '10vw' }} >
          <Typography sx={{ fontSize: {md:'58px', xs:'40px'}, fontWeight: '700', lineHeight: {md:'70px', xs:'50px'} }} >Generate Awesome Web Pages</Typography>
          <Typography sx={{ fontSize: {md:'22px', xs:'20px'}, fontWeight: '500', lineHeight: '32px', my: '40px' }} >The most important part of the Startup is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks.</Typography>
          <Button variant='contained' color="secondary" style={{ borderRadius: '20px', fontWeight: '600' }} >Learn More</Button>
        </Grid>
        <Grid item md={6} xs={12} sx={{ px: { md: '7vw', xs: '10vw' }, my: { md: '10px', xs: '10vh' } }} >
          <Grid sx={{ backgroundColor: '#FFFFFF', borderRadius: '10px', textAlign: 'center' }} >
            <form>
              <Typography sx={{ fontSize: {md:'42px', xs:'35px'}, fontWeight: '700', color: "#1E0E62", py: '50px', textAlign: 'center' }} >Sign Up Now</Typography>
              <Box sx={{display: 'flex', flexDirection:'column' , mx:{md:'3vw', xs:'10vw'}}} >
                <TextField
                  required
                  label="Your email"
                  name="email"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '30px',
                    },
                    borderRadius: "30px",
                    width: {md:'25vw', xs:'50vw'},
                    backgroundColor: '#FFFFFF',
                    mb: '20px'
                  }}
                  onChange={handleChange}
                />
                <TextField
                  required
                  label="Your Password"
                  name="password"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '30px',
                    },
                    borderRadius: "30px",
                    width: {md:'25vw', xs:'50vw'},
                    backgroundColor: '#FFFFFF',
                    mb: '20px'
                  }}
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mx: {md:'60px', xs:'40px'}, color: '#000000' }} >
                <Checkbox
                  onChange={handleCheck}
                  checked={checked}
                  name='agreement'
                  sx={{ color: 'black' }}
                />
                <Typography sx={{fontSize:{md:'16px', xs:'14px'}}} >I agree to the Terms of Service.</Typography>
              </Box>
              <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{
                  ":hover": { bgcolor: "", color: "white" },
                  backgroundColor: '#482BE7',
                  my: '10px',
                  width: {md:'25vw', xs:'50vw'},
                  height: '50px',
                  borderRadius: '30px'
                }}
              >
                Sign in
              </Button>
            </form>
            <Divider sx={{ color: '#EBEAED', mx: '60px', textAlign: 'center' }} >or</Divider>
            <Button variant="contained" sx={{ ":hover": { bgcolor: "#0368A6", color: "white" }, backgroundColor: '##1DA1F2', my: '10px', width: {md:'25vw', xs:'50vw'}, borderRadius: '30px' }}>
              {<Typography sx={{ my: '5px', py: '5px', fontSize: '14px' }}>Login via Twitter</Typography>}
            </Button>
            <Box sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column' }, py: '30px', mx: {md:'90px', xs:'50px'}, alignItems: 'center' }} >
              <Typography sx={{ fontSize: { md: '18px', xs: '15px' }, color: "black", mx: '10px' }} >
                Do you have an Account?
              </Typography>
              <Link href='/' underline="none" style={{ color: '#25DAC5' }} >Sign In</Link>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  )
}
