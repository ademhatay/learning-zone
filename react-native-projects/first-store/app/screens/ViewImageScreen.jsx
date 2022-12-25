import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../config/color'
import { MaterialCommunityIcons } from '@expo/vector-icons'

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
		position: 'absolute',
		top: 40,
		left: 30,
	},
	deleteIcon: {
		position: 'absolute',
		top: 40,
		right: 30,
	},
})


const ViewImageScreen = () => {
	return <>
		<View style={styles.container}>
			<Image style={styles.image} source={require('../assets/chair.jpg')} />
			<View style={styles.closeIcon}>
				<MaterialCommunityIcons name="close" color="white" size={35} />
			</View>
			<View style={styles.deleteIcon}>
				<MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
			</View>
		</View>
	</>
}

export default ViewImageScreen
