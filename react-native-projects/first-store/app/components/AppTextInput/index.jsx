import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '../../config/color'

const AppTextInput = ({ icon, ...otherProps }) => {
	return <>
		<View style={styles.container}>
			{icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={colors.dark} />}
			<TextInput
				{...otherProps}
				style={styles.textInput} />
		</View>
	</>
}

export default AppTextInput

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: 'row',
		width: '100%',
		padding: 15,
		marginVertical: 10,
		alignItems: 'center'
	},
	textInput: {
		color: colors.dark,
		fontSize: 18,
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
	},
	icon: {
		marginRight: 10
	}
})