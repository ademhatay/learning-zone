import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../../config/color'

const styles = StyleSheet.create({
	separator: {
		width: '100%',
		height: 1,
		backgroundColor: colors.medium,
		opacity: 0.2
	}
})

const ListItemSeparator = () => {
	return <>
		<View style={styles.separator} />
	</>
}

export default ListItemSeparator
