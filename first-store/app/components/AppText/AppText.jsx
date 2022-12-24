import { Text } from 'react-native';
import React from 'react';
import styles from './style';

const AppText = ({ children }) => {
	return <>
		<Text style={styles.text}>
			{children}
		</Text>
	</>
}

export default AppText