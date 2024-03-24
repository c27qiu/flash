import React, { useState, useEffect } from 'react';
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
import Modal from 'react-native-modal';

const NotifsScreenPage = ({ navigation }) => {
	const [isModalVisible, setModalVisible] = useState(false);
	const [notifications, setNotifications] = useState([]);
	// const wallName = 'MainBackSide';

	// const [serverMessages, setServerMessages] = useState([]);


	const defaultGradesCount = {
		yellow: 0,
		green: 0,
		blue: 0,
		red: 0,
		orange: 0,
		purple: 0,
		black: 0,
	};
	const [serverState, setServerState] = useState('Loading...');
	const [wallName, setWallName] = useState('');
	const [imageUri, setImageUri] = useState('');
	const [dateOfChange, setDate] = useState('');
	const [gradesDetected, setGradeMapProp] = useState({});

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	useEffect(() => {
		const ws = new WebSocket(
			'ws://ec2-18-218-31-105.us-east-2.compute.amazonaws.com:8080/wse/2839'
		);

		ws.onopen = () => {
			setServerState('Connected to server');
		};

		ws.onmessage = (event) => {
			const receivedData = JSON.parse(event.data);
			const { wall_name: wallNameFromData, image_path: imagePath, date_modified: date, grades: grades } =
				receivedData;

			setWallName(wallNameFromData);
			setGradeMapProp(grades);

			// Parse the datetime string into a Date object
			const parsedDate = new Date(date);
			// Format the date into "Month Day Year" format
			const options = { month: 'long', day: '2-digit', year: 'numeric' };
			const formattedDate = parsedDate.toLocaleDateString('en-US', options);
			setDate(formattedDate)

			const bucketName = 'fydp-photos';
			const imageUrl = `https://${bucketName}.s3.us-east-2.amazonaws.com/${imagePath}`;
			setImageUri(imageUrl);
			setModalVisible(true);

			// setServerMessages((prevMessages) => [...prevMessages, imageUrl]);
		};

		ws.onclose = () => {
			setServerState('Disconnected from server');
		};

		ws.onerror = (error) => {
			setServerState('WebSocket error: ', error);
		};

		return () => {
			ws.close();
		};
	}, []);

	const hardcode_notifications = [
		{
			title: 'Arch I/J/K/L',
			date: '5h ago',
			update:
				'Update to wall has been rejected!',
			commonText:
				' View to see the change.',
		},
		{
			title: 'Training Cave Wall A',
			date: '2d ago',
			update:
				'A new change has been detected!',
			commonText:
				' View to see the change.',
		},
		{
			title: 'Cave D/E',
			date: '4d ago',
			update:
				'Update to wall has been approved!',
			commonText:
				 ' View to see the change.',
		},
		{
			title: 'Kids Area C',
			date: '1w ago',
			update:
				'A new change has been detected!',
			commonText:
				 ' View to see the change.',
		},
	];

	const notificationComponents = hardcode_notifications.map(
		(notification, index) => (
			<Notification
				title={notification.title}
				date={notification.date}
				update={notification.update}
				commonText={notification.commonText}
				index={index}
			/>
		)
	);

	const handleApproveButtonPress = () => {
		const index = notifications.length;

		const newNotification = (
			<Notification
				style={{ marginTop: 5 }}
				wallName={wallName}
				key={notifications.length}
				title='Arch I/J/K/L'
				date='1m ago'
				update='Update to wall has been approved!'
				commonText=' View to see the change.'
				index={index}
			/>
		);

		setNotifications([...notifications, newNotification]);

		const gradesDetectedMap = {
			"yellow": gradesDetected["yellow"] || 1,
			"green": gradesDetected["green"] || 1,
			"blue": gradesDetected["blue"] || 0,
			"red": gradesDetected["red"] || 1,
			"orange": gradesDetected["orange"] || 0,
			"purple": gradesDetected["purple"] || 0,
			"black": gradesDetected["black"] || 1,
		}
		navigation.navigate("HomeGymMap", {
			fromNotifsPage: true,
			wallScreenToShow: wallName,
			imagePath: imageUri,
			dateOfImage: dateOfChange,
			grades: gradesDetectedMap,
		});
		toggleModal();
	};

	return (
		<View style={styles.container}>
			<View style={styles.buttonContainer}>
				<View style={styles.notifications}>
					<ScrollView>
						{notifications.map((notification, index) => (
							// Render the notifications conditionally based on the notifications state
							<View key={index}>{notification}</View>
						))}
						{notificationComponents}
					</ScrollView>
				</View>
				<View style={styles.modalcontainer}>
					<Modal
						animationType='slide'
						isVisible={isModalVisible}
						onRequestClose={() => {
							setModalVisible(!isModalVisible);
						}}
					>
						<View style={styles.modalContainer}>
							<Image
								source={{ uri: imageUri }}
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
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FDFDF3',
	},
	notifications: {
		marginTop: 75,
		marginBottom: 20,
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
		// marginTop: 10,
	},
});

export default NotifsScreenPage;
