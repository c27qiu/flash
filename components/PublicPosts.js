import { EvilIcons, AntDesign } from '@expo/vector-icons';

import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../redux/posts/postsOperations';
import { useEffect, useState } from 'react';

export const PublicPosts = ({ item, navigation }) => {
	const userNickname = useSelector((state) => state.auth.nickname);
	const [post, setPost] = useState(null);
	const [likeCounter, setLikeCounter] = useState('#3C3C3C');

	const dispatch = useDispatch();
	const {
		photo,
		title,
		comments,
		photoLocation,
		inputLocation,
		userPhoto,
		nickname,
		id,
		likes,
	} = item;

	useEffect(() => {
		if (likes?.includes(userNickname)) {
			setLikeCounter('#FF6C00');
		} else {
			setLikeCounter('#3C3C3C');
		}
		const unsub = onSnapshot(doc(db, 'posts', id), (doc) => {
			setPost(doc.data());
		});
		return () => unsub();
	}, [likes]);

	if (!likes) {
		return;
	}

	const postRef = doc(db, 'posts', id);

	const like = async () => {
		if (post.likes.includes(userNickname)) {
			const filteredLikes = post.likes.filter(
				(like) => like !== userNickname
			);
			await updateDoc(postRef, {
				likes: filteredLikes,
			});
			setLikeCounter('#FF6C00');
			dispatch(getAllPosts());
		} else {
			await updateDoc(postRef, {
				likes: [...post.likes, userNickname],
			});
			setLikeCounter('#FF6C00');
			dispatch(getAllPosts());
		}
	};
	return (
		<View style={{marginTop: 15, paddingHorizontal: 7}}>
		<View
			style={{
				backgroundColor: '#FCFFF5',
				marginBottom: 6,
				justifyContent: 'center',
				borderRadius: 25,
				shadowColor: '#000',
				shadowOffset: { width: 2.3, height: 2.3 },
				shadowOpacity: 0.25,
				shadowRadius: 3.84,
			}}
		>
			{navigation.getState().index === 0 && (
				<View style={styles.userBox}>
					<View style={styles.userInformation}>
						<Text style={styles.userName}>@{nickname}</Text>
						<Text style={styles.date}>1m ago</Text>
					</View>
				</View>
			)}
			<View style={styles.uploadPost}>
				<Image
					source={{
						uri: photo,
					}}
					style={{
						width: '100%',
						height: 240,
						borderRadius: 12,
						opacity: 0.9,
					}}
				/>
				<Text style={styles.title}>{title}</Text>
				<View style={styles.informationBox}>
					<TouchableOpacity
						style={styles.spanBox}
						activeOpacity={0.8}
						onPress={() =>
							navigation.navigate('Comments', { photo, id })
						}
					>
						<EvilIcons
							name='comment'
							size={24}
							color={comments > 0 ? '#FF6C00' : '#3C3C3C'}
						/>
						<Text
							style={
								comments === 0
									? {
											...styles.spanValue,
											color: '#3C3C3C',
											fontSize: 12,
									  }
									: {
											...styles.spanValue,
											color: '#3C3C3C',
											fontSize: 12,
									  }
							}
						>
							{comments}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.spanBox}
						activeOpacity={0.8}
					>
						<AntDesign
							style={styles.spanLikeIcon}
							name='like2'
							size={18}
							color={likes?.length > 0 ? '#FF6C00' : '#3C3C3C'}
							onPress={like}
						/>
						<Text
							style={
								likes?.length === 0
									? {
											...styles.spanValue,
											color: '#3C3C3C',
											fontSize: 12,
									  }
									: {
											...styles.spanValue,
											color: '#3C3C3C',
											fontSize: 12,
									  }
							}
						>
							{likes?.length}
						</Text>
					</TouchableOpacity>
					<View style={styles.spanBoxLocation}>
						<EvilIcons name='location' size={24} color='#3C3C3C' />
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() =>
								navigation.navigate('Map', { photoLocation })
							}
						>
							<Text style={styles.location}>{inputLocation}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
		</View>
	);
};

const styles = StyleSheet.create({
	userBox: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: '#FCFFF5',
	},
	userInformation: {
		flexDirection: 'row',
		justifyContent: 'space-between', // Spacing between children
		width: '100%', // Ensure full width
		paddingHorizontal: 17, // Add horizontal padding
		marginBottom: 14,
		marginTop: 17,
	},
	userName: {
		// marginLeft: 10,
		// marginRight: 10,
		fontFamily: 'Rubik-Medium',
		fontSize: 14,
		// justifyContent: 'center',
		// alignItems: 'center',
	},
	date: {
		fontSize: 12,
		color: '#888',
		// marginLeft: 10,
	},
	image: {
		marginTop: 5,
		borderRadius: 8,
		width: 343,
		height: 230,
	},
	title: {
		marginTop: 9,
		fontFamily: 'Rubik-Regular',
		fontSize: 13,
		lineHeight: 19,
		color: '#3C3C3C',
	},
	uploadPost: {
		paddingRight: 17,
		paddingLeft: 17,
	},
	informationBox: {
		marginTop: 12,
		flexDirection: 'row',
		marginBottom: 17,
	},
	spanBox: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	spanLikeIcon: {
		marginLeft: 12,
	},
	spanBoxLocation: {
		flexDirection: 'row',
		marginLeft: 'auto',
	},
	location: {
		alignItems: 'flex-end',
		fontFamily: 'Rubik-Regular',
		fontWeight: 400,
		fontSize: 12,
		lineHeight: 20,
		textAlign: 'right',
		textDecorationLine: 'underline',
		color: '#3C3C3C',
	},
	spanValue: {
		marginLeft: 5,
		fontFamily: 'Rubik-Regular',
		fontWeight: 400,
		fontSize: 16,
		lineHeight: 19,
	},
});
