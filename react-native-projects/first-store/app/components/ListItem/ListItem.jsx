import { View, Image } from 'react-native'
import React from 'react'
import AppText from '../AppText/AppText'
import styles from './style'


const ListItem = ({ image, title, subTitle }) => {
	return <>
		<View style={styles.container}>
			<Image style={styles.image} source={image} />
			<View style={styles.userContainer}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.subTitle}>{subTitle}</AppText>
			</View>
		</View>
	</>
}

export default ListItem
