import { StyleSheet, FlatList, View, Text } from 'react-native'
import React from 'react'
import { Card, Screen } from '../../components'
import { colors } from '../../config/color'

const listings = [
	{
		id: 1,
		title: 'Red jacket for sale',
		price: 100,
		image: require('../../assets/jacket.jpg')
	},
	{
		id: 2,
		title: 'Couch in great condition',
		price: 1000,
		image: require('../../assets/couch.jpg')
	},
]

const ListingsScreen = () => {
	return (
		<Screen style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={listing => listing.id.toString()}
				renderItem={({ item }) =>
					<Card
						title={item.title}
						subtitle={'$' + item.price}
						image={item.image}
					/>
				}
			/>

		</Screen>
	)
}

export default ListingsScreen

const styles = StyleSheet.create({
	screen: {
		padding: 20,
		backgroundColor: colors.light
	},
})