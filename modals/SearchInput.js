import React, { useState } from 'react';
import {
	View,
	TextInput,
	Modal,
	Text,
	TouchableOpacity,
	Image,
	StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchInput = ({ departments, handleSubDepartmentPress }) => {
	const [searchText, setSearchText] = useState('');
	const [filteredSubDepartments, setFilteredSubDepartments] = useState([]);
	const [isModalVisible, setIsModalVisible] = useState(false);

	const handleSearch = () => {
		const filteredSubDeps = [];
		departments.forEach((dep) => {
			dep.subDepartments.forEach((subDep) => {
				if (subDep.name.toLowerCase().includes(searchText.toLowerCase())) {
					filteredSubDeps.push(subDep);
				}
			});
		});
		setFilteredSubDepartments(filteredSubDeps);
		setIsModalVisible(true);
	};

	return (
		<View style={styles.searchWrapper}>
			<TextInput
				style={styles.searchInput}
				onChangeText={(text) => setSearchText(text)}
				value={searchText}
				placeholder='Search by name, type, etc...'
				onSubmitEditing={handleSearch}
			/>
			<Modal
				visible={isModalVisible}
				onRequestClose={() => setIsModalVisible(false)}>
				<View style={{}}>
					<TouchableOpacity onPress={() => setIsModalVisible(false)}>
						<View style={{ position: 'relative' }}>
							<View
								style={{
									position: 'absolute',
									top: 0,
									right: 0,
									paddingRight: 8,
								}}>
								<Ionicons name='close' size={55} color='orange' />
							</View>
						</View>
					</TouchableOpacity>
					<View style={{ paddingVertical: 18, marginTop: 20, paddingLeft: 6 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 22 }}>
							Your Search results are
						</Text>
					</View>
					{filteredSubDepartments.map((subDep) => (
						<View key={subDep.name} style={{ marginVertical: 20 }}>
							<TouchableOpacity>
								<View style={styles.card}>
									<Text style={styles.title}>{subDep.name}</Text>
									<Image source={{ uri: subDep.photo }} style={styles.image} />
								</View>
							</TouchableOpacity>
						</View>
					))}
				</View>
			</Modal>
		</View>
	);
};

export default SearchInput;

const styles = StyleSheet.create({
	searchInput: {
		width: '100%',
		height: '100%',
		paddingHorizontal: 16,
	},
	searchContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: 20,
		height: 50,
	},
	searchWrapper: {
		flex: 1,
		backgroundColor: '#F3F4F8',
		marginRight: 12,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 16,
		height: '100%',
	},
	card: {
		borderRadius: 10,
		backgroundColor: '#fff',
		elevation: 3,
		shadowOffset: { width: 1, height: 1 },
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		marginHorizontal: 4,
		marginVertical: 6,
	},
	image: {
		width: '100%',
		height: 165,
		borderRadius: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginVertical: 10,
		marginHorizontal: 15,
	},
});
