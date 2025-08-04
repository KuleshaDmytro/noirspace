import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../../../../public/logo.jpeg'; // Assuming you have a Logo component
import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '@fontsource/space-grotesk';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import routes from '@/app/routes/routes';

const Header: React.FC = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#0D0D0D' }}>
            <Toolbar>

            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}>
                <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            overflow: 'hidden',
                            boxShadow: '0 0 0 3px #0b0d16ff',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                zIndex: 1,
                                pointerEvents: 'none',
                                background: 'radial-gradient(circle, #07080E 40%, #0D0D0D 100%)',
                                filter: 'blur(8px)',
                            },
                        }}
                    >
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={40}
                            height={40}
                            style={{
                                borderRadius: '50%',
                                objectFit: 'cover',
                                position: 'relative',
                                zIndex: 2,
                            }}
                        />
                    </Box>
                </Box>
                <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Link
                        href={routes.home}
                        style={{
                            color: 'inherit',
                            textDecoration: 'none',
                            marginLeft: 9,
                            marginRight: 9,
                            transition: 'background 0.2s, color 0.2s'
                        }}
                    >
                        <Typography
                            variant="body2"
                            fontSize={14}
                            fontFamily="Space Grotesk"
                            sx={{
                                fontWeight: 400,
                                '&:hover': {
                                    color: '#FFD700',
                                },
                                cursor: 'pointer'
                            }}
                        >
                            HOME
                        </Typography>
                    </Link>
                    <Link
                        href={routes.about}
                        style={{
                            color: 'inherit',
                            textDecoration: 'none',
                            marginLeft: 9,
                            marginRight: 9,
                            transition: 'background 0.2s, color 0.2s'
                        }}
                    >
                        <Typography
                            variant="body2"
                            fontSize={14}
                            fontFamily="Space Grotesk"
                            sx={{
                                fontWeight: 400,
                                '&:hover': {
                                    color: '#FFD700',
                                },
                                cursor: 'pointer'
                            }}
                        >
                            ABOUT
                        </Typography>
                    </Link>
                    <Link
                        href={routes.contact}
                        style={{
                            color: 'inherit',
                            textDecoration: 'none',
                            marginLeft: 9,
                            marginRight: 9,
                            transition: 'background 0.2s, color 0.2s'
                        }}
                    >
                        <Typography
                            variant="body2"
                            fontSize={14}
                            fontFamily="Space Grotesk"
                            sx={{
                                fontWeight: 400,
                                '&:hover': {
                                    color: '#FFD700',
                                },
                                cursor: 'pointer'
                            }}
                        >
                            CONTACT
                        </Typography>
                    </Link>

                </Box>

                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Link
                        href={routes.signIn}
                        style={{
                            color: 'inherit',
                            textDecoration: 'none',
                            marginLeft: 1,
                            marginRight: 1,
                            transition: 'background 0.2s, color 0.2s'
                        }}
                    >
                        <Typography
                            variant="body2"
                            fontSize={14}
                            fontFamily="Space Grotesk"
                            sx={{
                                fontWeight: 400,
                                '&:hover': {
                                    color: '#FFD700',
                                },
                                cursor: 'pointer'
                            }}
                        >
                             SIGN IN
                        </Typography>
                    </Link>
                </Box>
            </Box>
              
            </Toolbar>
        </AppBar>
    );
};

export default Header;