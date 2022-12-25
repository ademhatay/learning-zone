import { StyleSheet } from "react-native";
import { colors } from '../../config/color';

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 300,
	},
	detailsContainer: {
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: '500',
	},
	price: {
		color: colors.secondary,
		fontSize: 20,
		fontWeight: 'bold',
		marginVertical: 10,
	},
	userContainer: {
		marginVertical: 40,
	},
})

export default styles;