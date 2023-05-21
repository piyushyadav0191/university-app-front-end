import { StyleSheet, Text, View } from 'react-native';

const LabsText = () => {
	return (
		<View>
			<Text style={styles.text}>Labs</Text>
		</View>
	);
};

export default LabsText;

const styles = StyleSheet.create({
	text: {
		fontSize: 40,
		fontWeight: 'bold',
		paddingLeft: 12,
		paddingVertical: 8,
	},
});
