import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
	Modal,
	Button,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/action';

export default function Login() {
	const { error } = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const navigation = useNavigation();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMsg, setErrorMsg] = useState('');

	const loginHandler = () => {
		dispatch(login(email, password)).catch((error) => {
			setErrorMsg(error.response.data.message);
		});
	};

	useEffect(() => {
		if (error) {
			alert(error);
		}
		console.log(error, 'error');
	}, [error, alert]);

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require('../assets/BU.png')} />

			<StatusBar style='auto' />
			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder='Enter your Email.'
					placeholderTextColor='#003f5c'
					keyboardType='email-address'
					value={email}
					onChangeText={setEmail}
				/>
			</View>

			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder='Enter your password.'
					placeholderTextColor='#003f5c'
					value={password}
					onChangeText={setPassword}
				/>
			</View>

			<TouchableOpacity
				style={{
					backgroundColor: '#FF1493',
					padding: 10,
					width: 100,
					borderRadius: 20,
					alignItems: 'center',
					justifyContent: 'center',
				}}
				onPress={loginHandler}>
				<Text style={{ color: '#fff', fontWeight: 'bold' }}>Login</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => navigation.navigate('Register')}>
				<Text style={styles.forgot_button}>
					Don't have account yet?{' '}
					<Text style={{ color: '#FF1493', fontWeight: 'bold' }}>Register</Text>{' '}
				</Text>
			</TouchableOpacity>
		</View>
	);
}

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
		marginTop: 10,
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
