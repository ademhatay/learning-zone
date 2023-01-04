import React from "react";
import { View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./style";


function AppTextInput({ icon, width = "100%", ...otherProps }) {
	return (
		<View style={[styles.container, { width }]}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					size={20}
					color={styles.colors.medium}
					style={styles.icon}
				/>
			)}
			<TextInput style={styles.text} {...otherProps} />
		</View>
	);
}



export default AppTextInput;
