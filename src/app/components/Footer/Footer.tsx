import React from 'react';
import { Box, Typography } from '@mui/material'
import '@fontsource/space-grotesk';

const Footer: React.FC = () => {
    return (
        <footer>
            <Box
            sx={{
                width: '100%',
                padding: '1rem 0',
                textAlign: 'center',
                bgcolor: '#0D0D0D',
                color: 'common.white',
            }}
            component="footer"
            >
            <Typography variant="body2" fontSize={14} fontFamily="Space Grotesk" sx={{ fontWeight: 500 }}>
                &copy; {new Date().getFullYear()} NoirSpace. All rights reserved.
            </Typography>
            </Box>
        </footer>
    );
};

export default Footer;