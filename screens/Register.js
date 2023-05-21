import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { Avatar } from '@rneui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/action';
import mime from 'mime';

export default function Register({ route }) {
	const navigation = useNavigation();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [avatar, setAvatar] = useState('');

	const dispatch = useDispatch();

	const registerHandler = () => {
		const myForm = new FormData();
		myForm.append('name', name);
		myForm.append('email', email);
		myForm.append('password', password);
		myForm.append('avatar', {
			uri: avatar,
			type: mime.getType(avatar),
			name: avatar.split('/').pop(),
		});
		dispatch(register(myForm)).catch((error) => {
			alert(error.response.data.message);
			alert(error);
		});
	};
	const handleImage = () => {
		navigation.navigate('Camera', {
			updateProfile: false,
		});
	};

	useEffect(() => {
		if (route.params?.image) {
			setAvatar(route.params.image);
		}
	}, [route]);

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require('../assets/BU.png')} />

			<StatusBar style='auto' />
			{/* {errros ? <Text style={{ color: 'red' }}>{errros} </Text> : null} */}
			<Avatar
				containerStyle={{ backgroundColor: '#fff' }}
				size={70}
				source={{
					uri: avatar
						? avatar
						: 'https://thumbs.dreamstime.com/b/student-icon-vector-isolated-white-background-student-sign-student-icon-vector-isolated-white-background-student-transparent-134153763.jpg',
				}}
				rounded
			/>
			<TouchableOpacity onPress={handleImage} style={{ marginBottom: 17 }}>
				<Text style={{ fontSize: 15, fontWeight: 'bold' }}>
					Choose your Profile photo
				</Text>
			</TouchableOpacity>
			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder='Enter your Name.'
					placeholderTextColor='#003f5c'
					onChangeText={setName}
					value={name}
				/>
			</View>

			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder='Enter your Email.'
					placeholderTextColor='#003f5c'
					onChangeText={setEmail}
					value={email}
				/>
			</View>

			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder='Enter your password.'
					placeholderTextColor='#003f5c'
					secureTextEntry={true}
					onChangeText={setPassword}
					value={password}
				/>
			</View>
			{!avatar ? (
				<Text>Please fill all fields</Text>
			) : (
				<TouchableOpacity
					style={{
						backgroundColor: '#FF1493',
						padding: 10,
						width: 100,
						borderRadius: 20,
						alignItems: 'center',
						justifyContent: 'center',
					}}
					onPress={registerHandler}>
					<Text style={{ color: '#fff', fontWeight: 'bold' }}>Register</Text>
				</TouchableOpacity>
			)}

			<TouchableOpacity onPress={() => navigation.navigate('Login')}>
				<Text style={styles.forgot_button}>
					Already have a account?{' '}
					<Text style={{ color: '#FF1493', fontWeight: 'bold' }}>Login</Text>{' '}
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
