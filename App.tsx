import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
	useFonts,
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
} from '@expo-google-fonts/inter';
import { ThemeProvider } from 'styled-components/native';

import { Routes } from './src/routes';
import theme from './src/theme';

export default function App() {
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Inter_600SemiBold,
		Inter_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<ThemeProvider theme={theme}>
				<StatusBar
					barStyle='default'
					translucent
					backgroundColor='transparent'
				/>
				<Routes />
			</ThemeProvider>
		);
	}
}
