import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthNavigation from '../navigation/AuthNavigation';
import MainNavigation from './HomeNavigation';
import PublicQuizzes from '../screens/PublicQuizzes';

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
			<Stack.Screen
				name='PublicQuizzes'
				component={PublicQuizzes}
				options={{
					title: 'Public Quizzes',
					headerStyle: {
						shadowColor: 'gray',
						shadowOffset: { width: 0, height: 3 },
						shadowOpacity: 0.5,
						shadowRadius: 2,
					},
				}}
			/>
		</Stack.Navigator>
	);
};

export default AppNavigation;
