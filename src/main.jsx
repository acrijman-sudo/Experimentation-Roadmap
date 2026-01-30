import React from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import App from './App.jsx';

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#1976d2'
		},
		secondary: {
			main: '#9c27b0'
		}
	},
	shape: { borderRadius: 10 }
});

const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);


