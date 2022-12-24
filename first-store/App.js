import { StyleSheet, Text, View, } from 'react-native';
import { ViewImageScreen, WelcomeScreen } from './app/screens/';

export default function App() {

	return <>
		<WelcomeScreen />
	</>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
