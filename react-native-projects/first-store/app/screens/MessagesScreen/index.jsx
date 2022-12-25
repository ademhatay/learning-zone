import { FlatList, View } from 'react-native'
import React from 'react'
import { ListItem, ListItemSeparator, Screen } from '../../components';
import styles from './style';

const messages = [
	{ id: 1, title: 'T1', description: 'D1', image: require('../../assets/mosh.jpg') },
	{ id: 2, title: 'T2', description: 'D2', image: require('../../assets/mosh.jpg') },
	{ id: 3, title: 'T3', description: 'D3', image: require('../../assets/mosh.jpg') },
	{ id: 4, title: 'T4', description: 'D4', image: require('../../assets/mosh.jpg') },
	{ id: 5, title: 'T5', description: 'D5', image: require('../../assets/mosh.jpg') },
];


const MessagesScreen = () => {
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
					/>
				}
				ItemSeparatorComponent={ <ListItemSeparator /> }
			/>
		</Screen>
	</>
}

export default MessagesScreen