import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Button,
	TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { updatePassword } from '../redux/action';

const ChangePassword = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');

	const ChangePasswordHandler = () => {
		dispatch(updatePassword(oldPassword, newPassword));
	};

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require('../assets/BU.png')} />

			<StatusBar style='auto' />

			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder='Enter your old  password.'
					placeholderTextColor='#003f5c'
					secureTextEntry={true}
					autoCapitalize='none'
					autoCorrect={false}
					value={oldPassword}
					onChangeText={setOldPassword}
				/>
			</View>

			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder='Enter your new password.'
					placeholderTextColor='#003f5c'
					secureTextEntry={true}
					autoCapitalize='none'
					autoCorrect={false}
					value={newPassword}
					onChangeText={setNewPassword}
				/>
			</View>

			<TouchableOpacity
				style={{
					backgroundColor: '#FF1493',
					padding: 4,
					width: 200,
					borderRadius: 20,
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: 20,
				}}
				onPress={ChangePasswordHandler}>
				<Text style={{ color: '#fff', fontWeight: 'bold' }}>
					Update the Password
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: '#fff',

		alignItems: 'center',

		justifyContent: 'center',
	},

	image: {
		marginBottom: 40,
		height: 155,
		width: 200,
	},

	inputView: {
		backgroundColor: '#FFC0CB',

		borderRadius: 30,

		width: '70%',

		height: 45,

		marginBottom: 20,
	},

	TextInput: {
		height: 50,

		flex: 1,

		padding: 10,
	},

	forgot_button: {
		height: 30,

		marginBottom: 30,
	},

	loginBtn: {
		width: '80%',

		borderRadius: 25,

		height: 50,

		alignItems: 'center',

		justifyContent: 'center',

		marginTop: 40,

		backgroundColor: '#FF1493',
	},
});

export default ChangePassword;
