import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
	const [menu, setMenu] = useState(false);

	return (
		<Tab.Navigator
			tabBarOptions={{
				showLabel: false,
				activeTintColor: '#14C1FA',
				style: {
					height: 80,
					borderTopLeftRadius: 35,
					borderTopRightRadius: 35,
					paddingTop: 12,
					shadowColor: 'gray',
					shadowOffset: { width: 0, height: 0 },
					shadowOpacity: 1,
				},
			}}>
			<Tab.Screen
				name='Home'
				component={Home}
				options={{
					tabBarIcon: ({ color }) => (
						<Feather name='home' size={32} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Menu'
				component={Home}
				options={{
					tabBarIcon: () => (
						<>
							{menu && (
								<View style={styles.container}>
									<TouchableOpacity style={styles.find}>
										<FontAwesome name='search' size={40} color='#14C1FA' />
										<Text>Find Quiz</Text>
									</TouchableOpacity>
									<TouchableOpacity style={styles.find}>
										<MaterialIcons name='public' size={40} color='#14C1FA' />
										<Text>Public Quizzes</Text>
									</TouchableOpacity>
								</View>
							)}
							<TouchableOpacity
								style={styles.button}
								onPress={() => setMenu(!menu)}>
								<Fontisto
									style={styles.icon}
									name='compass'
									size={38}
									color='white'
								/>
							</TouchableOpacity>
						</>
					),
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={Profile}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name='ios-person-outline' size={32} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigation;

const styles = StyleSheet.create({
	container: {
		width: 300,
		height: 120,
		paddingHorizontal: 20,
		borderRadius: 23,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		position: 'absolute',
		bottom: 100,
		shadowColor: 'gray',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 1,
	},
	find: {
		height: 75,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	button: {
		position: 'absolute',
		bottom: 15,
		left: 30,
		width: 70,
		padding: 15,
		borderRadius: 23,
		backgroundColor: '#14C1FA',
	},
	icon: {
		alignSelf: 'center',
	},
});
