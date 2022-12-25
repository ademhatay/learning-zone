import { StyleSheet, Text, View, } from 'react-native';
import { Icon, ListItem, Screen } from './app/components';
import { ListingDetailsScreen, MessagesScreen, ViewImageScreen, WelcomeScreen } from './app/screens/';

export default function App() {

	return <>
		<Screen>
			<ListItem title="My title"
				imageComponent={<Icon name="email" />}
			/>
		</Screen>
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
