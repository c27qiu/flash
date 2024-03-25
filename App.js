import React, { useCallback } from 'react';

import Main from './components/Main';

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

function App() {
	const [fontsLoaded] = Font.useFonts({
		'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
		'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
		'Epilogue-SemiBold': require('./assets/fonts/Epilogue-SemiBold.ttf'),
		'Epilogue-Medium': require('./assets/fonts/Epilogue-Medium.ttf'),
		'Rubik-Light': require('./assets/fonts/Rubik-Light.ttf'),
		'Rubik-Medium': require('./assets/fonts/Rubik-Medium.ttf'),
		'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<Provider store={store}>
			<Main />
		</Provider>
	);
}

export default App;
