import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthNavigation from '../navigation/AuthNavigation';
import MainNavigation from './HomeNavigation';

const Stack = createStackNavigator();

const AppNavigation = () => {
	return (
		<Stack.Navigator initialRouteName='MainNavigation'>
			<Stack.Screen
				name='AuthNavigation'
				component={AuthNavigation}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='MainNavigation'
				component={MainNavigation}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default AppNavigation;
