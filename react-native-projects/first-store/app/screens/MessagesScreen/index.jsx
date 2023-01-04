import { FlatList, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ListItem, ListItemDeleteAction, ListItemSeparator, Screen } from '../../components';
import styles from './style';

const InitialMessages = [
	{ id: 1, title: 'T1', description: 'D1', image: require('../../assets/mosh.jpg') },
	{ id: 2, title: 'T2', description: 'D2', image: require('../../assets/mosh.jpg') },
	{ id: 3, title: 'T3', description: 'D3', image: require('../../assets/mosh.jpg') },
	{ id: 4, title: 'T4', description: 'D4', image: require('../../assets/mosh.jpg') },
	{ id: 5, title: 'T5', description: 'D5', image: require('../../assets/mosh.jpg') },
];


const MessagesScreen = () => {

	const [messages, setMessages] = useState(InitialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = message => {
		// Delete the message from messages
		const newMessages = messages.filter(m => m.id !== message.id);
		setMessages(newMessages);
	}

	return <>
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={message => message.id.toString()}
				renderItem={({ item }) =>
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						renderRightActions={() => <ListItemDeleteAction
							onPress={() => handleDelete(item)} />
						}
					/>
				}
				ItemSeparatorComponent={<ListItemSeparator />}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages([
						{
							id: 2,
							title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
							description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
							image: require("../../assets/mosh.jpg"),
						},
					]);
				}}
			/>
		</Screen>
	</>
}

export default MessagesScreen