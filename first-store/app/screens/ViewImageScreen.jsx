import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../config/color'
import Ionicons from '@expo/vector-icons/Ionicons';
const ViewImageScreen = () => {
	return <>
		<View style={styles.container}>
			<Image style={styles.image} source={require('../assets/chair.jpg')} />
			<View style={styles.closeIcon}>
				<Ionicons name="md-checkmark-circle" size={32} color="green" />
			</View>
			<View style={styles.deleteIcon}></View>
		</View>
	</>
}

export default ViewImageScreen

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.black,
		flex: 1,
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain'
	},
	closeIcon: {
		width: 50,
		height: 50,
		backgroundColor: colors.primary,
		position: 'absolute',
		top: 40,
		left: 30,
	},
	deleteIcon: {
		width: 50,
		height: 50,
		backgroundColor: colors.secondary,
		position: 'absolute',
		top: 40,
		right: 30,
	},
})