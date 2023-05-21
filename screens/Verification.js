import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { loadUser, verification } from '../redux/action';

const Verification = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const [otp, setOtp] = useState('');

	const veirfyHandler = async () => {
		await dispatch(verification(otp));
		dispatch(loadUser());
	};

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require('../assets/BU.png')} />

			<StatusBar style='auto' />

			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder='Enter OTP sent to your email address.'
					placeholderTextColor='#003f5c'
					autoCapitalize='none'
					autoCorrect={false}
					keyboardType='email-address'
					value={otp}
					onChangeText={setOtp}
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
					paddingBottom: 10,
					paddingTop: 10,
				}}
				onPress={veirfyHandler}>
				<Text style={{ color: '#fff', fontWeight: 'bold' }}>
					Verify your Account
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

export default Verification;
