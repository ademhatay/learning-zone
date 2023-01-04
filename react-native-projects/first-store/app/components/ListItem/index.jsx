import { View, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import AppText from '../AppText'
import styles from './style'
import { colors } from '../../config/color'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'


const ListItem = ({ image, title, subTitle, imageComponent, renderRightActions }) => {
	return (
		<GestureHandlerRootView>
			<Swipeable renderRightActions={renderRightActions}>
				<TouchableHighlight underlayColor={colors.light}>
					<View style={styles.container}>
						{imageComponent}
						{image && <Image style={styles.image} source={image} />}
						<View style={styles.userContainer}>
							<AppText numberOfLines={1} style={styles.title}>{title}</AppText>
							{subTitle && <AppText numberOfLines={2} style={styles.subTitle}>{subTitle}</AppText>}
						</View>
						<MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium} />

					</View>
				</TouchableHighlight>
			</Swipeable>
		</GestureHandlerRootView>
	)
}

export default ListItem
