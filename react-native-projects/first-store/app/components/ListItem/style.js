import { StyleSheet } from 'react-native'
import { colors } from '../../config/color'


const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 15,
		backgroundColor: colors.white,
		alignItems: 'center',
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	userContainer:{
		justifyContent: 'center',
		flex: 1,
		marginLeft: 10,
	},
	title: {
		fontWeight: '500',
	},
	subTitle: {
		color: colors.medium,
	},
})


export default styles