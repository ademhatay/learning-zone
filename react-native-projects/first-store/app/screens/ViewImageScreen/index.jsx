import { Image, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './style'



const ViewImageScreen = () => {
	return <>
		<View style={styles.container}>
			<Image style={styles.image} source={require('../../assets/chair.jpg')} />
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
