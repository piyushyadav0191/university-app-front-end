import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../redux/action';

const ResetPassword = () => {
	const navigation = useNavigation();
	const { message, error } = useSelector((state) => state.auth);
	const [otp, setOtp] = useState();
	const [newPassword, setNewPassword] = useState();
	const dispatch = useDispatch();

	const resetPasswordHandler = async () => {
		await dispatch(resetPassword(otp, newPassword));
		navigation.navigate('login');
	};

	useEffect(() => {
		if (message) {
			alert(message);
			dispatch({ type: 'clearMessage' });
		}
		if (error) {
			alert(error);
			dispatch({ type: 'clearError' });
		}
	}, [alert, message, dispatch, error]);

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require('../assets/BU.png')} />

			<StatusBar style='auto' />
			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder='Enter your OTP.'
					placeholderTextColor='#003f5c'
					secureTextEntry={true}
					autoCapitalize='none'
					autoCorrect={false}
					value={otp}
					onChangeText={setOtp}
					keyboardType='number-pad'
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

			<Button title='Reset Password' onPress={resetPasswordHandler} />
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

export default ResetPassword;
