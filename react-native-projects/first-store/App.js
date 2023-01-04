import React, { useState } from 'react'
import { StyleSheet, Text, View, } from 'react-native';
import { AppPicker, AppTextInput, Icon, ListItem, Screen } from './app/components';
import { AccountScreen, ListingDetailsScreen, ListingEditScreen, ListingsScreen, Login, MessagesScreen, Register, ViewImageScreen, WelcomeScreen } from './app/screens/';

export default function App() {


	return <>
		<ListingEditScreen />
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
