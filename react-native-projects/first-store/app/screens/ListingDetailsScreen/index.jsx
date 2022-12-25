import { Image, View } from 'react-native'
import React from 'react'
import { AppText, ListItem } from '../../components'
import styles from './style'


const ListingDetailsScreen = () => {
	return <>
		<Image style={styles.image} source={require('../../assets/jacket.jpg')} />
		<View style={styles.detailsContainer}>
			<AppText style={styles.title}>Red jacket for sale</AppText>
			<AppText style={styles.price}>$100</AppText>
		</View>
		<View style={styles.userContainer}>
			<ListItem
				image={require('../../assets/mosh.jpg')}
				title="Mosh Hamedani"
				subTitle="5 Listings"
			/>
		</View>
	</>
}

export default ListingDetailsScreen

