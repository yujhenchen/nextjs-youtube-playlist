// src/theme.ts
'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { lightBlue, teal } from '@mui/material/colors';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: lightBlue[500],
            light: lightBlue[200],
            dark: lightBlue[700],
            contrastText: '#fff',
        },
        secondary: {
            main: teal[500],
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {
        MuiAlert: {
            // styleOverrides: {
            //     root: ({ ownerState }) => ({
            //         ...(ownerState.severity === 'info' && {
            //             backgroundColor: '#60a5fa',
            //         }),
            //     }),
            // },
        },
        MuiButton: {
            // styleOverrides: {
            //     root: ({ ownerState }) => ({
            //         ...(ownerState.variant === 'contained' &&
            //             ownerState.color === 'primary' && {
            //             backgroundColor: lightBlue[500],
            //             color: '#fff',
            //         }),
            //     }),
            // },
        },
    },
});

export default theme;
