import { StyleSheet } from "react-native";
import { colors } from '../../config/color';

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

export default styles;