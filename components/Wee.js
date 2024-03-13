import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import base64 from 'react-native-base64';

const Wee = () => {
	const [serverMessages, setServerMessages] = useState([]);
	const [serverState, setServerState] = useState('Loading...');

	useEffect(() => {
		const ws = new WebSocket('ws://172.20.10.5:8000/wse/1000');

		ws.onopen = () => {
			setServerState('Connected to server');
		};

		ws.onmessage = (event) => {
			const base64Image = base64.encodeFromByteArray(
				new Uint8Array(event.data)
			);
			setServerMessages((prevMessages) => [...prevMessages, event.data]);
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

	return (
		<View>
			<Text>{serverState}</Text>
			{serverMessages.map((message, index) => (
				<Text key={index}>{message}</Text>
			))}
		</View>
	);
};

export default Wee;
