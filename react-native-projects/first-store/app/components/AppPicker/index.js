import React, { useState } from "react";
import {
	View,
	TouchableWithoutFeedback,
	Modal,
	Button,
	FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../AppText";
import Screen from "../Screen";
import styles from "./style";
import PickerItem from "../PickerItem";

function AppPicker({ icon, numberOfColumns = 1, items, onSelectItem, PickerItemComponent = PickerItem, placeholder, selectedItem, width = "100%" }) {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={[styles.container, { width }]}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={styles.colors.medium}
							style={styles.icon}
						/>
					)}
					<AppText style={styles.textHere}>
						{selectedItem ? selectedItem.label : placeholder}
					</AppText>
					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={styles.colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Screen>
					<Button title="Close" onPress={() => setModalVisible(false)} />
					<FlatList
						data={items}
						numColumns={numberOfColumns}
						keyExtractor={(item) => item.value.toString()}
						renderItem={({ item }) => (
							<PickerItemComponent
								item={item}
								label={item.label}
								onPress={() => {
									setModalVisible(false);
									onSelectItem(item);
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</>
	);
}



export default AppPicker;
