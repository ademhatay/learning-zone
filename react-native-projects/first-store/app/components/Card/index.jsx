import { View, Image } from 'react-native'
import React from 'react'
import styles from './style';
import AppText from '../AppText';

const Card = ({ title, subtitle, image }) => {
	return <>
		<View style={styles.card}>
			<Image style={styles.image} source={image} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.subtitle}>{subtitle}</AppText>
			</View>
		</View>
	</>
}

export default Card