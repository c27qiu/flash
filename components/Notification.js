import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Notification = ({ wallName, title, date, update, commonText, index }) => {
	const backgroundColor = index % 2 === 0 ? '#E5F1DB' : '#FCFFF5';
	let updateStyle = styles.updateDetails; // Default style

	if (update === 'Update to wall has been approved!') {
		updateStyle = styles.approvedUpdate;
	} else if (update === 'Update to wall has been rejected!') {
		updateStyle = styles.rejectedUpdate;
	} else if (update === 'A new change has been detected!') {
		updateStyle = styles.detectedUpdate;
	}

	return (
		<TouchableOpacity style={styles.button}>
			<View style={styles.container}>
				<View style={[styles.background, { backgroundColor }]}>
					<View style={styles.header}>
						<Text style={styles.title}>{title}</Text>
						<Text style={styles.date}>{date}</Text>
					</View>
					<Text style={styles.details}>
						<Text style={updateStyle}>{update}</Text>
						<Text style={styles.commonText}>{commonText}</Text>
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 24,
		paddingVertical: 9,
	},
	background: {
		// backgroundColor: '#EFEFEF', // Background color for the rounded rectangle
		borderRadius: 15, // Border radius to create rounded corners
		padding: 15, // Padding around the content
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2.5 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
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
	updateDetails: {
		fontFamily: 'Rubik-Medium',
	},
	approvedUpdate: {
		color: 'green',
		fontFamily: 'Rubik-Medium',
	},
	rejectedUpdate: {
		color: '#DD5D5D',
		fontFamily: 'Rubik-Medium',
	},
	detectedUpdate: {
		color: 'black',
		fontFamily: 'Rubik-Medium',
	},
	commonText: {
		fontFamily: 'Rubik-Regular',
	},
	details: {
		fontSize: 14,
		color: '#3C3C3C',
	},
});

export default Notification;
