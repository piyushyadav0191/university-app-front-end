import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

const CameraScreen = ({ route }) => {
	const navigation = useNavigation();

	const [type, setType] = useState(CameraType.back);
	const [permission, requestPermission] = Camera.useCameraPermissions();
	const [camera, setCamera] = useState(null);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			if (status !== 'granted') {
				alert('Sorry, we need camera permissions to make this work!');
			}
		})();
	}, []);

	const openImagePicker = async () => {
		try {
			let data = await ImagePicker.launchImageLibraryAsync({
				allowsEditing: true,
				quality: 1,
			});

			if (!data.canceled) {
				if (route.params.updateProfile) {
					return navigation.navigate('Profile', { image: data.uri }); // profile model pr jana g
				} else return navigation.navigate('Register', { image: data.uri });
			} else {
				alert('You did not select any image.');
			}
		} catch (error) {
			console.log(error);
		}
	};

	const clickPicture = async () => {
		// const data = await camera.takePictureAsync();
		// console.log(data.uri);
		// navigation.navigate('Register', { image: data.uri });
		try {
			const data = await camera.takePictureAsync();
			if (route.params.updateProfile) {
				return navigation.navigate('Profile', { image: data.uri }); // profile model pr jana g
			} else return navigation.navigate('Register', { image: data.uri });
		} catch (error) {
			console.log(error);
		}
	};

	if (!permission) return <Text>No access to Camera</Text>;

	if (!permission.granted) return <Text>No Access to camera</Text>;

	function toggleCameraType() {
		setType((current) =>
			current === CameraType.back ? CameraType.front : CameraType.back
		);
	}

	return (
		<View style={{ flex: 1 }}>
			<Camera
				type={type}
				style={{ flex: 1 }}
				// ratio='1:1'
				// pictureSize='700x700'
				ref={(e) => setCamera(e)}>
				<View
					style={{
						flexDirection: 'row',
						position: 'absolute',
						bottom: 10,
						justifyContent: 'space-evenly',
						width: '100%',
						backgroundColor: 'black',
						height: '10%',
						alignContent: 'center',
						alignItems: 'center',
					}}>
					<FontAwesome5
						name='images'
						size={25}
						color='white'
						onPress={openImagePicker}
					/>

					<Entypo
						name='circle'
						size={35}
						color='white'
						onPress={clickPicture}
					/>
					<Ionicons
						name='md-camera-reverse-outline'
						size={35}
						color='white'
						onPress={toggleCameraType}
					/>
				</View>
			</Camera>
		</View>
	);
};

export default CameraScreen;
