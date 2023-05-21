import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Footer = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.footer}>
			<TouchableOpacity
				onPress={() => navigation.navigate('Main')}
				style={styles.footerButton}>
				<Entypo name='home' size={34} color='#2898FF' />
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.navigate('FacultyMembers')}
				style={styles.footerButton}>
				<MaterialCommunityIcons name='terraform' size={34} color='#2898FF' />
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.navigate('Contact')}
				style={styles.footerButton}>
				<AntDesign name='API' size={34} color='#2898FF' />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	footer: {
		position: 'absolute',
		bottom: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 13,
		backgroundColor: '#f2f2f2',
		width: '100%',
	},
	footerButton: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
	},
	footerButtonText: {
		color: '#fff',
		fontWeight: 'bold',
	},
});

export default Footer;
