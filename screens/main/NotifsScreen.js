import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	SafeAreaView,
	Button,
	Alert,
	ScrollView,
} from 'react-native';
import Notification from '../../components/Notification';
import Wee from '../../components/Wee';
import Modal from 'react-native-modal';
// import AlertComponent from '../../components/AlertComponent';

const NotifsScreen = ({ navigation }) => {
	const [isModalVisible, setModalVisible] = useState(false);
	const [notifications, setNotifications] = useState([]);
	const imageUrl = require('../../assets/images/GymMap.jpg');
	const wallName = 'MainBackSide';

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	const handleApproveButtonPress = () => {
		// Create a new notification and add it to the notifications state
		const newNotification = (
			<Notification
				wallName='MainBackSide'
				key={notifications.length}
				title='Training Cave Wall A'
				date='1d ago'
				details='Update to wall has been approved! View to see the change.'
			/>
		);
		setNotifications([...notifications, newNotification]);
		navigation.navigate('GymMapScreen', { imageUrl, wallName });
		toggleModal();
	};

	return (
		<View style={styles.container}>
			<View style={styles.modalcontainer}>
				<Button title='Open Modal' onPress={toggleModal} />
				<Modal isVisible={isModalVisible}>
					<View style={styles.modalContainer}>
						<Image
							source={imageUrl}
							style={styles.image}
							resizeMode='cover'
						/>
						<View style={styles.buttonContainer}>
							<Button
								title='Approve'
								onPress={handleApproveButtonPress}
							/>
							<Button title='Reject' onPress={toggleModal} />
						</View>
					</View>
				</Modal>
			</View>
			{/* <SafeAreaView>
				<Wee />
			</SafeAreaView> */}
			<View style={styles.mapContainer}></View>
			<View style={styles.buttonContainer}>
				<ScrollView>
					{notifications.map((notification, index) => (
						// Render the notifications conditionally based on the notifications state
						<View key={index}>{notification}</View>
					))}
					<Notification
						title='Training Cave Wall A'
						date='1d ago'
						details='Update to wall has been approved! View to see the change.'
					/>
					<Notification
						title='Training Cave Wall A'
						date='1d ago'
						details='Update to wall has been approved! View to see the change.'
					/>
					<Notification
						title='Training Cave Wall A'
						date='1d ago'
						details='Update to wall has been approved! View to see the change.'
					/>
					<Notification
						title='Training Cave Wall A'
						date='1d ago'
						details='Update to wall has been approved! View to see the change.'
					/>
					{/* <Notification
						title='Training Cave Wall A'
						date='1d ago'
						details='Update to wall has been approved! View to see the change.'
					/>
					<Notification
						title='Training Cave Wall A'
						date='1d ago'
						details='Update to wall has been approved! View to see the change.'
					/>
					<Notification
						title='Training Cave Wall A'
						date='1d ago'
						details='Update to wall has been approved! View to see the change.'
					/> */}
				</ScrollView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	modalcontainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContainer: {
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 10,
		width: '80%', // Adjust the width as needed
		alignSelf: 'center',
	},
	image: {
		width: '100%',
		height: 200, // Adjust the height as needed
		borderRadius: 5,
		marginBottom: 10,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		// marginBottom: 10,
	},
});

export default NotifsScreen;
