import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const FindQuiz = () => {
	const [text, setText] = useState('');
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Find Quiz Code</Text>
			<Text style={styles.text}>
				Enter code to find quiz, and start gathering
				points!
			</Text>
			<View style={styles.search}>
				<FontAwesome name='search' size={22} color='rgba(50, 52, 56, .4)' />
				<TextInput
					style={styles.input}
					onChangeText={setText}
					value={text}
					placeholder='Search quiz code'
					placeholderTextColor='rgba(50, 52, 56, .4)'
				/>
			</View>
		</View>
	);
};

export default FindQuiz;

const styles = StyleSheet.create({
	container: {
		height: 250,
		marginHorizontal: 25,
		justifyContent: 'space-evenly',
		borderRadius: 35,
        backgroundColor: '#14C1FA'
	},
	title: {
		marginHorizontal: 30,
        fontSize: 22,
		fontWeight: 'bold',
		color: 'white',
	},
	text: {
		marginHorizontal: 30,
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 27,
		color: 'white',
	},
	search: {
		marginHorizontal: 30,
        paddingVertical: 18,
        paddingHorizontal: 20,
		flexDirection: 'row',
        borderRadius: 16,
		backgroundColor: 'white',
	},
	input: {
		marginLeft: 15,
        fontSize: 18
	},
});
