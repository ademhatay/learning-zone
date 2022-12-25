import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants';

const styles = StyleSheet.create({
	screen: {
		marginTop: Constants.statusBarHeight,
		flex: 1,
	}
});


const Screen = ({ children, style }) => {
	return <>
		<SafeAreaView style={[styles.screen, style]}>
			{children}
		</SafeAreaView>
	</>
}

export default Screen
