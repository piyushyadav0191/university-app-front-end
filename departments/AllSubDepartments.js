import { useNavigation } from '@react-navigation/native';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AllSubDepartments = ({
	accomodation,
	type,
	floor,
	description,
	imageUrl,
	name,
}) => {
	const navigation = useNavigation();

	return (
		<View style={{ position: 'relative' }}>
			<ScrollView>
				<TouchableOpacity
					style={{
						position: 'absolute',
						top: 0,
						right: 0,
						borderRadius: 8,
						zIndex: 1,
					}}
					onPress={() => navigation.navigate('Main')}>
					<Text style={{ color: '#fff', fontWeight: 'bold' }}>
						<AntDesign name='closecircle' size={55} color='white' />
					</Text>
				</TouchableOpacity>
				<Image source={imageUrl} style={styles.backgroundImage} />
				<View style={{ flex: 1 }}>
					<View
						style={{ marginTop: 16, marginHorizontal: 16, marginBottom: 50 }}>
						<View
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								marginBottom: 8,
							}}>
							<Text style={{ fontSize: 23, fontWeight: 'bold' }}>{name} </Text>
						</View>
						<Text>
							<Text style={{ fontWeight: 'bold', fontSize: 17 }}>
								Accomodation:
							</Text>
							{accomodation}
						</Text>
						<Text>
							<Text style={{ fontWeight: 'bold', fontSize: 17 }}>Floor: </Text>
							{floor}
						</Text>
						<Text>
							<Text style={{ fontWeight: 'bold', fontSize: 17 }}>Type: </Text>
							{type}
						</Text>
						<View style={{ marginTop: 10, marginBottom: 16 }}>
							<Text
								style={{
									fontWeight: 'bold',
									color: '#9BA4B5',
									fontSize: 17,
								}}>
								{description}
							</Text>
						</View>
						<View style={{ marginVertical: 300 }}></View>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundImage: {
		resizeMode: 'cover',
		width: '100%',
		height: '30%',
		borderRadius: 25,
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#fff',
		textAlign: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		padding: 10,
	},
});

export default AllSubDepartments;
