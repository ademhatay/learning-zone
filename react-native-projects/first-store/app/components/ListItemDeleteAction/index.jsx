import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'


const ListItemDeleteAction = ({ onPress }) => {
	return <>
		<TouchableWithoutFeedback onPress={onPress} >
			<View style={styles.container}>
				<MaterialCommunityIcons name='trash-can' size={35} color='white' />
			</View>
		</TouchableWithoutFeedback>
	</>
}

export default ListItemDeleteAction

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'red',
		width: 70,
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
})