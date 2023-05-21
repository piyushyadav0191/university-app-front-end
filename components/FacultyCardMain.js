import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const FacultyCardMain = ({ data }) => {
	const navigation = useNavigation();
	return (
		<View>
			<Text onPress={() => navigation.goBack()} style={{ fontSize: 20 }}>
				Back
			</Text>
			<Text>{data}</Text>
		</View>
	);
};

export default FacultyCardMain;

const styles = StyleSheet.create({});
