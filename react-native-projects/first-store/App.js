import React, { useState } from 'react'
import { StyleSheet, Text, View, } from 'react-native';
import { AppTextInput, Icon, ListItem, Screen } from './app/components';
import { AccountScreen, ListingDetailsScreen, ListingsScreen, MessagesScreen, ViewImageScreen, WelcomeScreen } from './app/screens/';

export default function App() {

	const [text, setText] = useState('');

	return <>
		<Screen>
			<AppTextInput icon="email" placeholder="Email" />
		</Screen>
	</>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
