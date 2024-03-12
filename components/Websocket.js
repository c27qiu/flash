import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Websocket = () => {
	const [isWebSocketConnected, setIsWebSocketConnected] = useState(false);
	const [socket, setSocket] = useState(null);

	const handleConnectButtonClick = () => {
		if (!isWebSocketConnected) {
			const newSocket = new WebSocket('ws://127.0.0.1:8000/ws/12');

			newSocket.addEventListener('open', (event) => {
				console.log('WebSocket Connection Opened:', event);
				setServerState('WebSocket Connection Opened');
				setIsWebSocketConnected(true);
			});

			newSocket.addEventListener('message', (event) => {
				setServerState('Disconnected. Check internet or server.');
				console.log('Received Message:', event.data);
			});

			newSocket.addEventListener('close', (event) => {
				console.log('WebSocket Connection Closed:', event);
				setIsWebSocketConnected(false);
			});

			setSocket(newSocket);
		} else {
			// Close the WebSocket connection if already open
			socket.close();
			setIsWebSocketConnected(false);
			setSocket(null);
		}
	};

	return (
		<View>
			<Text>Your React Native Component</Text>
			<Button
				title={
					isWebSocketConnected
						? 'Disconnect WebSocket'
						: 'Connect WebSocket'
				}
				onPress={handleConnectButtonClick}
			/>
			{/* Your component's content */}
		</View>
	);
};

export default Websocket;
