import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import QuizItem from '../components/QuizItem';

const PublicQuizes = () => {
	const [active, setActive] = useState('all');

	return (
		<View style={styles.container}>
			<View style={styles.sort}>
				<TouchableOpacity
					style={[styles.filter, active === 'all' ? styles.active : null]}
					onPress={() => setActive('all')}>
					<Text
						style={[
							styles.text,
							active === 'all' ? { color: '#FFFFFF' } : null,
						]}>
						All
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.filter, active === 'recent' ? styles.active : null]}
					onPress={() => setActive('recent')}>
					<Text
						style={[
							styles.text,
							active === 'recent' ? { color: '#FFFFFF' } : null,
						]}>
						Recent
					</Text>
				</TouchableOpacity>
			</View>
			{active === 'all' ? (
				<>
					<QuizItem
						image={require('../assets/math1.jpeg')}
						title='Math'
						code='THG89X'
					/>
					<QuizItem
						image={require('../assets/math1.jpeg')}
						title='English'
						code='ACF36T'
					/>
					<QuizItem
						image={require('../assets/math1.jpeg')}
						title='Science'
						code='ZDJ14P'
					/>
					<QuizItem
						image={require('../assets/math1.jpeg')}
						title='Math'
						code='THG89X'
					/>
					<QuizItem
						image={require('../assets/math1.jpeg')}
						title='English'
						code='ACF36T'
					/>
					<QuizItem
						image={require('../assets/math1.jpeg')}
						title='Science'
						code='ZDJ14P'
					/>
				</>
			) : (
				<>
					<QuizItem
						image={require('../assets/math1.jpeg')}
						title='Math'
						code='THG89X'
                        posted='Posted 5 Minutes Ago'
					/>
					<QuizItem
						image={require('../assets/math1.jpeg')}
						title='English'
						code='ACF36T'
                        posted='Posted 12 Hours Ago'
					/>
					<QuizItem
						image={require('../assets/math1.jpeg')}
						title='Science'
						code='ZDJ14P'
                        posted='Posted on February 2021'
					/>
                    <QuizItem
						image={require('../assets/math1.jpeg')}
						title='Math'
						code='THG89X'
                        posted='Posted 5 Minutes Ago'
					/>
				</>
			)}
		</View>
	);
};

export default PublicQuizes;

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 30,
	},
	sort: {
		height: 50,
		width: 250,
		marginVertical: 25,
		alignSelf: 'center',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		borderRadius: 18,
		backgroundColor: '#FFFFFF',
	},
	text: {
		fontSize: 18,
	},
	filter: {
		height: 45,
		width: 120,
		borderRadius: 18,
		alignItems: 'center',
		justifyContent: 'center',
		color: '#FFFFFF',
	},
	active: {
		backgroundColor: '#14C1FA',
	},
});
