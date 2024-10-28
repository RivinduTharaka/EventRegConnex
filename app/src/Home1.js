import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, Box } from '@mui/material';

function Home() {
    const [userId, setUserId] = useState('');
    const [isPremium, setIsPremium] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userId) {
            setIsPremium(true); // Activate premium card display if User ID is entered
        }
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            sx={{ bgcolor: '#f5f5f5' }}
        >
            {!isPremium ? (
                <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>
                        Enter Your User ID
                    </Typography>
                    <TextField
                        label="User ID"
                        variant="outlined"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{
                            padding: '12px 24px', // Increase padding for a larger button
                            fontSize: '1.2rem',    // Increase font size
                            width: '70%',
                        }}
                    >
                        Submit
                    </Button>
                </form>
            ) : (
                <Card
                    sx={{
                        maxWidth: 400,
                        mt: 4,
                        p: 3,
                        boxShadow: 3,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #4e54c8, #8f94fb)', // Use "background" for gradient
                    }}
                >
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
                           Vistor Login
                        </Typography>
                        <Typography sx={{ mt: 1, color: 'white' }}>
                            User ID: {userId}
                        </Typography>
                        <Typography sx={{ mt: 2, color: 'white' }}>
                            Congratulations! You now have access to join the session:
                        </Typography>
                        <ul style={{ color: 'white', paddingLeft: '1.2em' }}>
                            <li>Unlimited Access</li>
                            <li>Priority Support</li>
                            <li>Exclusive Discounts</li>
                        </ul>
                    </CardContent>
                </Card>
            )}
        </Box>
    );
}

export default Home;
