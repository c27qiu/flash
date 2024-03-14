import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Notification = ({ wallName, title, date, details }) => {
	return (
		<TouchableOpacity style={styles.button}>
			<View style={styles.container}>
				<View style={styles.line} />
				<View style={styles.header}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.date}>{date}</Text>
				</View>
				<Text style={styles.details}>{details}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 8,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 8,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		marginRight: 8,
	},
	date: {
		fontSize: 12,
		color: '#888',
	},
	line: {
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		marginBottom: 8,
	},
	details: {
		fontSize: 16,
		color: '#333',
	},
});

export default Notification;
