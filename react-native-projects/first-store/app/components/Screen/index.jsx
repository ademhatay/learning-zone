import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants';

const styles = StyleSheet.create({
	screen: {
		marginTop: Constants.statusBarHeight,
	}
});


const Screen = ({children}) => {
  return <>
	<SafeAreaView style={styles.screen}>
		{children}
	</SafeAreaView>
  </>
}

export default Screen
