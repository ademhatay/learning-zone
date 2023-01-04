import { Text } from 'react-native';
import React from 'react';
import styles from './style';

const AppText = ({ children, style, ...otherProps }) => {
	return <>
		<Text style={[styles.text, style]} {...otherProps}>
			{children}
		</Text>
	</>
}

export default AppText