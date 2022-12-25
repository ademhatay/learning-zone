import { View, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import AppText from '../AppText'
import styles from './style'
import { colors } from '../../config/color'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { GestureHandlerRootView } from 'react-native-gesture-handler'



const ListItem = ({ image, title, subTitle, imageComponent, renderRightActions }) => {
	return (
		<GestureHandlerRootView>
			<Swipeable renderRightActions={renderRightActions}>
				<TouchableHighlight underlayColor={colors.light}>
					<View style={styles.container}>
						{imageComponent}
						{image && <Image style={styles.image} source={image} />}
						<View style={styles.userContainer}>
							<AppText style={styles.title}>{title}</AppText>
							{subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
						</View>
					</View>
				</TouchableHighlight>
			</Swipeable>
		</GestureHandlerRootView>
	)
}

export default ListItem
