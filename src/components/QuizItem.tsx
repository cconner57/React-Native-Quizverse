import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

type Quiz = {
	image: object;
	title: string;
	code: string;
};

const QuizItem = ({ image, title, code }: Quiz) => {
	return (
		<TouchableOpacity style={styles.container}>
			<Image style={styles.image} source={image} />
			<View style={styles.details}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.code}>{code}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default QuizItem;

const styles = StyleSheet.create({
	container: {
		height: 80,
		marginVertical: 10,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
		borderRadius: 10,
		shadowColor: 'gray',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.5,
	},
	image: {
		height: 60,
		width: 60,
		marginHorizontal: 10,
		borderRadius: 10,
	},
	details: {
		height: 60,
		width: 230,
		marginLeft: 10,
		justifyContent: 'space-evenly',
	},
	title: {
		marginBottom: 6,
		fontSize: 20,
		fontWeight: '600',
	},
	code: {
		fontSize: 14,
		color: 'gray',
	},
});
