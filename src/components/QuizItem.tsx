import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { block } from 'react-native-reanimated';

type Quiz = {
	image: object;
	title: string;
	code: string;
	posted?: string;
};

const QuizItem = ({ image, title, code, posted }: Quiz) => {
	return (
		<TouchableOpacity
			style={[styles.container, posted ? { height: 130 } : { height: 80 }]}>
			<View style={styles.content}>
				<Image style={styles.image} source={image} />
				<View style={styles.details}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.code}>{code}</Text>
				</View>
			</View>
			{posted && (
				<View style={styles.date}>
					<Text style={styles.text}>{posted}</Text>
				</View>
			)}
		</TouchableOpacity>
	);
};

export default QuizItem;

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		paddingLeft: 15,
		backgroundColor: '#FFFFFF',
		borderRadius: 10,
		justifyContent: 'center',
		shadowColor: 'gray',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.5,
	},
	content: {
		flexDirection: 'row',
	},
	image: {
		height: 60,
		width: 60,
		marginRight: 10,
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
	date: {
		alignSelf: 'flex-start',
		marginTop: 13,
		backgroundColor: 'hsla(195,96%,53%,0.1)',
		borderRadius: 20
	},
	text: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		fontWeight: '500',
		color: 'hsl(195,96%,53%)',
	},
});
