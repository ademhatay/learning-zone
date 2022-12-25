import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppText, ListItem } from '../components'
import { colors } from '../config/color'

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

const ListingDetailsScreen = () => {
	return <>
		<Image style={styles.image} source={require('../assets/jacket.jpg')} />
		<View style={styles.detailsContainer}>
			<AppText style={styles.title}>Red jacket for sale</AppText>
			<AppText style={styles.price}>$100</AppText>
		</View>
		<View style={styles.userContainer}>
			<ListItem
				image={require('../assets/mosh.jpg')}
				title="Mosh Hamedani"
				subTitle="5 Listings"
			/>
		</View>
	</>
}

export default ListingDetailsScreen

