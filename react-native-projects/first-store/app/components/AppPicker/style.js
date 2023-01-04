import { Platform, StyleSheet } from "react-native";
import { colors } from "../../config/color";


const styles = StyleSheet.create({
	colors,
	container: {
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: "row",
		width: "100%",
		padding: 15,
		marginVertical: 10,
	  },
	  icon: {
		marginRight: 10,
	  },
	  textHere: {
		flex: 1,
	  },
	text: {
		color: colors.dark,
		fontSize: 18,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
	},
});


export default styles;