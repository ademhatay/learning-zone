import { View, Image, ImageBackground, Text } from 'react-native'
import React from 'react'
import { AppButton } from '../../components';
import styles from './style';

const WelcomeScreen = () => {
	return <>
		<ImageBackground
			blurRadius={10}
			style={styles.background}
			source={require('../../assets/background.jpg')}>

			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require('../../assets/logo-red.png')} />

				<Text style={styles.tagLine}>Sell What You Don't Need</Text>
			</View>

			<View style={styles.buttonContainer}>
				<AppButton title="Login" color="primary" />
				<AppButton title="Register" color="secondary" />
			</View>
		</ImageBackground>
	</>
}

export default WelcomeScreen