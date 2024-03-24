import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Notification = ({ wallName, title, date, details, index }) => {
	const backgroundColor = index % 2 === 0 ? '#E5F1DB' : '#FCFFF5';

	return (
		<TouchableOpacity style={styles.button}>
			<View style={styles.container}>
				<View style={[styles.background, { backgroundColor }]}>
					<View style={styles.header}>
						<Text style={styles.title}>{title}</Text>
						<Text style={styles.date}>{date}</Text>
					</View>
					<Text style={styles.details}>{details}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 23,
		paddingVertical: 8,
	},
	background: {
		// backgroundColor: '#EFEFEF', // Background color for the rounded rectangle
		borderRadius: 15, // Border radius to create rounded corners
		padding: 15, // Padding around the content
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 8,
	},
	title: {
		fontSize: 16,
		fontFamily: 'Rubik-Medium',
		marginRight: 8,
		color: '#3C3C3C',
	},
	date: {
		fontSize: 12,
		color: '#9A9A97',
	},
	details: {
		fontSize: 14,
		fontFamily: 'Rubik-Regular',
		color: '#3C3C3C',
	},
});

export default Notification;
