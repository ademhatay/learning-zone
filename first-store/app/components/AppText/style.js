import { StyleSheet, Platform } from "react-native";


const styles = StyleSheet.create({
	text: {
		color: Platform.OS === 'android' ? 'red' : 'blue',
		fontSize: Platform.OS === 'android' ? 20 : 18,
	}
});


export default styles;