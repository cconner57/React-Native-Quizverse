import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FindQuiz from '../components/FindQuiz';
import PublicQuizList from '../components/PublicQuizList';

const Home = ({ navigation }: any) => {
	return (
		<View style={styles.container}>
			<View style={styles.intro}>
				<Text style={styles.welcome}>👋 Welcome, Chris!</Text>
			</View>
			<FindQuiz />
			<PublicQuizList navigation={navigation} />
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fafafa',
	},
	intro: {
		marginTop: 50,
		marginBottom: 30,
		alignSelf: 'center',
		borderRadius: 16,
		backgroundColor: '#FFFFFF',
		shadowColor: 'gray',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.5,
	},
	welcome: {
		paddingVertical: 14,
		paddingHorizontal: 25,
		fontSize: 16,
	},
});
