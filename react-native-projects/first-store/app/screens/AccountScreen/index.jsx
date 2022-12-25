import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { Icon, ListItem, ListItemSeparator, Screen } from '../../components'
import { colors } from '../../config/color'
import styles from './style'


const MenuItems = [
	{
		title: 'My Listings',
		icon: {
			name: 'format-list-bulleted',
			backgroundColor: colors.primary
		}
	},
	{
		title: 'My Messages',
		icon: {
			name: 'email',
			backgroundColor: colors.secondary
		},
		targetScreen: 'Messages'
	}
]

const AccountScreen = () => {
	return <>
		<Screen style={styles.screen}>
			<ListItem
				title="Mosh Hamedani"
				subTitle="programming@mosh.com"
				image={require('../../assets/mosh.jpg')}
			/>
			<View style={styles.container}>
				<FlatList
					data={MenuItems}
					keyExtractor={menuItem => menuItem.title}
					ItemSeparatorComponent={() => <ListItemSeparator />}
					renderItem={({ item }) =>
						<ListItem
							title={item.title}
							imageComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
						/>
					}
				/>
			</View>
			<ListItem 
				title="Log Out"	
				imageComponent={
					<Icon
						name="logout"
						backgroundColor="#ffe66d"
					/>
				}
			/>
		</Screen>
	</>
}

export default AccountScreen