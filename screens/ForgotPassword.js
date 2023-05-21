import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../redux/action';

const ForgotPassword = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();

	const [email, setEmail] = useState('');

	const { loading } = useSelector((state) => state.auth);

	const forgotHandler = async () => {
		try {
			await dispatch(forgetPassword(email));
			navigation.navigate('ResetPassword');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require('../assets/BU.png')} />

			<StatusBar style='auto' />

			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder='Enter your Email.'
					placeholderTextColor='#003f5c'
					autoCapitalize='none'
					autoCorrect={false}
					keyboardType='email-address'
					value={email}
					onChangeText={setEmail}
				/>
			</View>

			<Button title='Forgot Password' onPress={forgotHandler} />
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

export default ForgotPassword;
