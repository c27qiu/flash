import React, { useState } from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';

const AlertComponent = () => {
	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	return (
		<View style={styles.container}>
			<Button title='Open Modal' onPress={toggleModal} />

			<Modal isVisible={isModalVisible}>
				<View style={styles.modalContainer}>
					{/* Image component */}
					<Image
						source={require('../assets/images/GymMap.jpg')}
						style={styles.image}
						resizeMode='cover'
					/>

					{/* Additional content or buttons can be added here */}
					<Button
						title='Button 1'
						onPress={() => console.log('Button 1 pressed')}
					/>
					<Button
						title='Button 2'
						onPress={() => console.log('Button 2 pressed')}
					/>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContainer: {
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 10,
		width: '80%', // Adjust the width as needed
	},
	image: {
		width: '100%',
		height: 200, // Adjust the height as needed
		borderRadius: 10,
		marginBottom: 10,
	},
});

export default AlertComponent;
