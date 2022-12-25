import { StyleSheet, Text, View, } from 'react-native';
import { Icon, ListItem, Screen } from './app/components';
import { AccountScreen, ListingDetailsScreen, MessagesScreen, ViewImageScreen, WelcomeScreen } from './app/screens/';

export default function App() {

	return <>
		<AccountScreen />
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
