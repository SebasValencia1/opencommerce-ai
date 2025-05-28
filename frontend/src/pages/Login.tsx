import { Alert, Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { redirect, RoutepPage } from '../commons/router';
import { LoginPayload, loginUser } from '../services/userService';

const Login = () => { 

    const [formData, setFormData] = useState<LoginPayload>({
        email: '',
        password: '',
      });

    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        loginUser(formData)
          .then(() => redirect(RoutepPage.HOME))
            .catch((err: any) => setError(err.response?.data?.message || 'Login failed'));
      };

    return (
        <Container maxWidth="xs">
        <Box sx={{ mt: 8 }}>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                name="email"
                label="Email"
                type="email"
                fullWidth
                onChange={handleChange}
                required
              />
              <TextField
                name="password"
                label="Password"
                type="password"
                fullWidth
                onChange={handleChange}
                required
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                SUBMIT
              </Button>
            </Stack>
          </form>
  
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
        </Box>
      </Container>
    )
}

export default Login;