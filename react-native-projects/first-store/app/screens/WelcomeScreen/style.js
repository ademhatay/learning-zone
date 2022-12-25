import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	logo: {
		width: 100,
		height: 100,
	},
	logoContainer: {
		position: 'absolute',
		top: 70,
		alignItems: 'center',
	},
	buttonContainer: {
		padding: 20,
		width: '100%',
	},
	tagLine: {
		fontSize: 25,
		fontWeight: '600',
		paddingVertical: 20,
	},
});

export default styles;