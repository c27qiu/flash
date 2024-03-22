import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
	Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { authSignOutUser } from '../../redux/auth/authOperations';
import MainBackSideImage from '../../assets/images/MainBackSide.jpg';

const MainBackSide = ({ navigation, route }) => {

	const [imageSource, getImageSource] = useState(null);
	const [ImageTime, getImageTime] = useState(null);
	// const testpls = route?.params?.imagePath || "Current Problems";
	const [imageWidth, setImageWidth] = useState(null);
	const [imageHeight, setImageHeight] = useState(null);

	useEffect(() => {
		const calculateImageSize = async () => {
			const source = Image.resolveAssetSource(MainBackSideImage);
			const screenWidth = Dimensions.get('window').width;
			const calculatedWidth = screenWidth * 0.9;
			const aspectRatio = source.width / source.height;
			const calculatedHeight = calculatedWidth / aspectRatio;
			setImageWidth(calculatedWidth);
			setImageHeight(calculatedHeight);
		};

		calculateImageSize();

    // TODO: have a more dynamic way of getting this image. perhaps by always setting a "current" image
    getImageSource(
      route?.params?.imagePath || 
      "https://fydp-photos.s3.us-east-2.amazonaws.com/raw-pi-photos/Feb29-11PM.jpg"
    )
    getImageTime(
      route?.params?.dateOfImage ||
      "February 29, 2024"
    )

	}, []);

	const signOut = () => {
		dispatch(authSignOutUser());
	};

	// Define a map of letter grades to colors
	const gradeColorMap = {
		red: 'red',
		yellow: 'yellow',
		orange: 'orange',
		blue: 'blue',
		green: 'green',
		purple: 'purple',
		black: 'black',
	};

	// Function to render buttons for each grade
	const renderGradeButtons = () => {
		return Object.entries(gradeColorMap).map(([grade, color]) => (
			<View key={grade} style={styles.row}>
				<View
					style={[styles.colorCircle, { backgroundColor: color }]}
				/>
				<Text style={styles.gradeName}>{grade}</Text>
				<Text style={styles.numberOfAscents}>10</Text>
				<TouchableOpacity
					style={[styles.viewBetaButton, { backgroundColor: color }]}
				>
					<Text style={styles.viewBetaButtonText}>View Beta</Text>
				</TouchableOpacity>
			</View>
		));
	};

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					height: 30,
					borderBottomColor: '#0000004D',
					borderWidth: 0.5,
					borderColor: '#ffffff',
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				<Text
					style={{
						fontFamily: 'Roboto-Medium',
						fontSize: 17,
						lineHeight: 22,
						color: '#212121',
						letterSpacing: -0.408,
						marginLeft: '35%',
					}}
				>
					Guelph Grotto
				</Text>
				<TouchableOpacity
					onPress={signOut}
					style={{ marginLeft: '30%', bottom: 3 }}
				>
					<Feather name='log-out' size={24} color='#BDBDBD' />
				</TouchableOpacity>
			</View>
			<View style={styles.pageTitleContainer}>
				<Text style={styles.pageTitle}>Main Boulder: Back Side</Text>
			</View>
			<View style={styles.imageContainer}>
				{imageWidth && imageHeight && (
					<Image
						source={{uri: imageSource}}
						style={{ width: imageWidth, height: imageHeight }}
					/>
				)}
			</View>
			<View style={styles.dateContainer}>
				<Text>Last Updated: {ImageTime}</Text>
			</View>
			<View style={styles.subtitleContainer}>
				<Text style={styles.subtitle}>Current Problems</Text>
			</View>
			<ScrollView style={styles.gradeButtonsContainer}>
				<View style={styles.row}>
					<Text style={styles.header}>Grade</Text>
					<Text style={styles.header}>Name</Text>
					<Text style={styles.header}>Ascents</Text>
					<View />
				</View>
				{renderGradeButtons()}
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	header: {
		height: 30,
		borderBottomColor: '#0000004D',
		borderWidth: 0.5,
		borderColor: '#ffffff',
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
		fontFamily: 'Roboto-Medium',
		fontSize: 17,
		lineHeight: 22,
		color: '#212121',
		letterSpacing: -0.408,
		marginLeft: '35%',
	},
	pageTitleContainer: {
		height: 40,
		borderBottomColor: '#0000004D',
		borderWidth: 0.5,
		borderColor: '#ffffff',
		flexDirection: 'row',
		alignItems: 'left',
		marginLeft: '5%',
		marginRight: '5%',
	},
	pageTitle: {
		fontFamily: 'Roboto-Medium',
		fontSize: 17,
		lineHeight: 35,
		color: '#212121',
		letterSpacing: -0.408,
		marginLeft: '5%',
		paddingTop: 10,
	},
	imageContainer: {
		marginLeft: '5%',
		marginRight: '5%',
		marginTop: '5%',
		borderRadius: 10,
		overflow: 'hidden',
	},
	dateContainer: {
		marginRight: '5%',
		marginTop: '2%',
		alignItems: 'flex-end',
		height: '3%',
		// backgroundColor: "red"
	},
	subtitleContainer: {
		marginRight: '5%',
		marginTop: '0%',
		alignItems: 'left',
		height: '5%',
		// backgroundColor: "blue"
	},
	subtitle: {
		fontFamily: 'Roboto-Medium',
		fontSize: 16,
		lineHeight: 35,
		color: '#212121',
		marginLeft: '5%',
		// paddingTop: 10,
	},
	gradeButtonsContainer: {
		marginTop: 10,
		marginLeft: '5%',
		marginRight: '5%',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 5,
	},
	colorCircle: {
		width: 30,
		height: 30,
		borderRadius: 15,
	},
	gradeName: {
		marginLeft: 10,
	},
	numberOfAscents: {
		marginLeft: 10,
	},
	viewBetaButton: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 10,
	},
	viewBetaButtonText: {
		color: '#FFFFFF',
	},
	header: {
		fontWeight: 'bold',
	},
});

export default MainBackSide;
