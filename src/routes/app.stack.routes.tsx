import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from '../pages/Welcome';
import { Home } from '../pages/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name='Welcome' component={Welcome} />
			<Screen name='Home' component={Home} />
		</Navigator>
	);
}
