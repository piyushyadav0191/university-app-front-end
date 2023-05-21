import { useNavigation } from '@react-navigation/native';
import { Avatar } from '@rneui/themed';
import * as React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	ImageBackground,
	StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, updateProfile, loadUser } from '../redux/action';
import mime from 'mime';
import Loader from '../components/Loader';
import { AntDesign } from '@expo/vector-icons';

function Profile({ route }) {
	const { user, loading } = useSelector((state) => state.auth);
	const navigation = useNavigation();

	const [name, setName] = React.useState(user.name);
	const [avatar, setAvatar] = React.useState(user.avatar.url);

	const dispatch = useDispatch();

	const submitHandler = async () => {
		const myForm = new FormData();
		myForm.append('name', name);
		myForm.append('avatar', {
			uri: avatar,
			type: mime.getType(avatar),
			name: avatar.split('/').pop(),
		});
		await dispatch(updateProfile(myForm));
		dispatch(loadUser());
	};
	const handleImage = () => {
		navigation.navigate('Camera', {
			updateProfile: true,
		});
	};
	const logoutHandler = () => {
		dispatch(logOut());
	};

	React.useEffect(() => {
		if (route.params?.image) {
			setAvatar(route.params.image);
		}
	}, [route]);

	return loading ? (
		<Loader />
	) : (
		<View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					bottom: -26,
				}}>
				<Text style={{ fontSize: 20, color: '#fff' }}>Edit Profile</Text>
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'flex-end',
					marginHorizontal: 20,
					marginBottom: 10,
				}}>
				<TouchableOpacity onPress={logoutHandler}>
					<AntDesign name='logout' size={35} color='white' />
				</TouchableOpacity>
			</View>
			<ImageBackground
				source={{
					uri: 'https://images.unsplash.com/photo-1559028010-e6d8c4ed3a7d',
				}}
				style={{ flex: 1 }}>
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: 'rgba(0,0,0,0.5)',
						paddingVertical: 20,
					}}>
					<Avatar size={100} rounded source={{ uri: avatar ? avatar : null }} />
					{user.verified && (
						<AntDesign name='checkcircle' size={24} color='#108cf5' />
					)}

					<TouchableOpacity onPress={handleImage}>
						<Text style={{ color: '#fff', fontSize: 16, marginTop: 10 }}>
							Change Photo
						</Text>
					</TouchableOpacity>
					<View style={{ width: '70%', marginTop: 20 }}>
						<TextInput
							placeholder='Name'
							value={name}
							onChangeText={setName}
							style={{
								backgroundColor: '#fff',
								borderRadius: 8,
								paddingHorizontal: 12,
							}}
						/>
					</View>
					{!user.verified && (
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
							onPress={() => navigation.navigate('Verification')}>
							<Text style={{ color: '#fff', fontWeight: 'bold' }}>
								Verify your Account
							</Text>
						</TouchableOpacity>
					)}

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
						onPress={() => navigation.navigate('ChangePassword')}>
						<Text style={{ color: '#fff', fontWeight: 'bold' }}>
							Change your Password
						</Text>
					</TouchableOpacity>

					<View style={styles.buttonsContainer}>
						<TouchableOpacity
							style={{
								backgroundColor: '#fff',
								width: 100,
								borderRadius: 20,
								justifyContent: 'center',
								alignItems: 'center',
							}}
							onPress={() => navigation.navigate('Main')}>
							<Text style={{ color: 'black', fontWeight: 'bold' }}>Cancel</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								backgroundColor: '#FF1493',
								padding: 4,
								width: 100,
								borderRadius: 20,
								justifyContent: 'center',
								alignItems: 'center',
							}}
							onPress={submitHandler}>
							<Text style={{ color: '#fff', fontWeight: 'bold' }}>Save</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonsContainer: {
		position: 'absolute',
		// bottom: 30,
		left: 0,
		right: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingBottom: 20,
	},
});

export default Profile;
