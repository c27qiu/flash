import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import Notification from '../../components/Notification';
import Websocket from '../../components/Websocket';

const NotifsScreen = ({ navigation }) => {
	const handleButtonPress = () => {
		// Navigate to a new blank page or perform any other action
	};

	return (
		<View style={styles.container}>
			<SafeAreaView>
				<Websocket />
			</SafeAreaView>
			<View style={styles.mapContainer}></View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={handleButtonPress}
				>
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
					<Notification
						title='Training Cave Wall A'
						date='1d ago'
						details='Update to wall has been approved! View to see the change.'
					/>
				</TouchableOpacity>
				{/* Add more buttons as needed */}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
});

export default NotifsScreen;
