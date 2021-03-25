import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import QuizItem from './QuizItem';

const PublicQuiz = () => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.text}>Public Quizzes</Text>
				<AntDesign name='arrowright' size={24} color='#14C1FA' />
			</View>
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
		</View>
	);
};

export default PublicQuiz;

const styles = StyleSheet.create({
	container: {
		margin: 25,
	},
	header: {
		marginHorizontal: 20,
		marginBottom: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	text: {
		fontSize: 18,
		fontWeight: '500',
	},
});
