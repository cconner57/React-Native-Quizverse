import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Onboarding/Welcome';
import Login from '../screens/Login/Login';
import Signup from '../screens/Login/Signup';
import CreateProfile from '../screens/Login/CreateProfile';
import ForgotPassword from '../screens/Login/ForgotPassword';
import ResetPassword from '../screens/Login/ResetPassword';

const Stack = createStackNavigator();

const AuthNavigation = () => {
	return (
		<Stack.Navigator initialRouteName="Welcome">
			<Stack.Screen name='Welcome' component={Welcome} />
			<Stack.Screen name='Login' component={Login} />
			<Stack.Screen name='Signup' component={Signup} />
			<Stack.Screen name='CreateProfile' component={CreateProfile} />
			<Stack.Screen name='ForgotPassword' component={ForgotPassword} />
			<Stack.Screen name='ResetPassword' component={ResetPassword} />
		</Stack.Navigator>
	);
};

export default AuthNavigation;
