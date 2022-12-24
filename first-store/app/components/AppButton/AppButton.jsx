import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';

import styles from './style';
import { colors } from '../../config/color';

const AppButton = ({title, color = 'primary', onPress = ()=> console.log(title)}) => {
	return <>
		<TouchableOpacity onPress={onPress} style={[styles.button, {backgroundColor: colors[color]}]}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	</>
}

export default AppButton