import { StyleSheet, Text, View, } from 'react-native';
import { ListingDetailsScreen, MessagesScreen, ViewImageScreen, WelcomeScreen } from './app/screens/';

export default function App() {

	return <>
		<MessagesScreen />
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
