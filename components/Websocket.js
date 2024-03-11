import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const Websocket = () => {
	const [message, setMessage] = useState(null);

	useEffect(() => {
		const ws = new WebSocket('ws://127.0.0.1:8000/ws/12');

		ws.onopen = () => {
			console.log('WebSocket connection opened');
			// connection opened
			ws.send('something'); // send a message
		};

		ws.onmessage = (e) => {
			// a message was received
			console.log('got message', e.data);
			const data = JSON.parse(e.data);
			setMessage(data);
		};

		ws.onerror = (e) => {
			// an error occurred
			console.log('websocket error ', e.message);
		};

		ws.onclose = (e) => {
			// connection closed
			console.log('connection closed ', e.code, e.reason);
		};

		return () => {
			ws.close();
		};
	}, []);

	return (
		<View>
			<Text>WebSocket Component</Text>
			{/* Add your UI components here */}
			<View>{message && <Text>{JSON.stringify(message)}</Text>}</View>
		</View>
	);
};

export default Websocket;
