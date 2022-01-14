import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from '../pages/Welcome';
import { Home } from '../pages/Home';
import { LocationInfo } from '../pages/LocationInfo';

import { LocationProps } from '../components/LocationBox';

const { Navigator, Screen } = createNativeStackNavigator();

declare global {
	namespace ReactNavigation {
		interface RootParamList {
			Welcome: undefined;
			Home: undefined;
			LocationInfo: LocationProps;
		}
	}
}

export function AppStackRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name='Welcome' component={Welcome} />
			<Screen name='Home' component={Home} />
			<Screen name='LocationInfo' component={LocationInfo} />
		</Navigator>
	);
}
