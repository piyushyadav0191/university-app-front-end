import { View } from 'react-native';
import AllSubDepartments from '../departments/AllSubDepartments';
import { subDepartmentsData } from '../data/Department';

const SubDepartmentScreen = ({ route }) => {
	return (
		<View>
			{route.params.subDepartmentName === 'Chemistry Lab' && (
				<AllSubDepartments
					accomodation={subDepartmentsData.chemistryLab.accodomation}
					type={subDepartmentsData.chemistryLab.type}
					floor={subDepartmentsData.chemistryLab.floor}
					description={subDepartmentsData.chemistryLab.description}
					imageUrl={subDepartmentsData.chemistryLab.imageUrl}
					name={subDepartmentsData.chemistryLab.name}
				/>
			)}
			{route.params.subDepartmentName === 'Computer Science Lab' && (
				<AllSubDepartments
					accomodation={subDepartmentsData.computerScienceLab.accodomation}
					type={subDepartmentsData.computerScienceLab.type}
					floor={subDepartmentsData.computerScienceLab.floor}
					description={subDepartmentsData.computerScienceLab.description}
					imageUrl={subDepartmentsData.computerScienceLab.imageUrl}
					name={subDepartmentsData.computerScienceLab.name}
				/>
			)}
			{route.params.subDepartmentName === 'IT Lab' && (
				<AllSubDepartments
					accomodation={subDepartmentsData.itLab.accodomation}
					type={subDepartmentsData.itLab.type}
					floor={subDepartmentsData.itLab.floor}
					description={subDepartmentsData.itLab.description}
					imageUrl={subDepartmentsData.itLab.imageUrl}
					name={subDepartmentsData.itLab.name}
				/>
			)}
			{route.params.subDepartmentName === 'Mech Lab' && (
				<AllSubDepartments
					accomodation={subDepartmentsData.itLab.accodomation}
					type={subDepartmentsData.itLab.type}
					floor={subDepartmentsData.itLab.floor}
					description={subDepartmentsData.itLab.description}
					imageUrl={subDepartmentsData.itLab.imageUrl}
					name={subDepartmentsData.itLab.name}
				/>
			)}
			{route.params.subDepartmentName === 'Electronics Lab' && (
				<AllSubDepartments
					accomodation={subDepartmentsData.itLab.accodomation}
					type={subDepartmentsData.itLab.type}
					floor={subDepartmentsData.itLab.floor}
					description={subDepartmentsData.itLab.description}
					imageUrl={subDepartmentsData.itLab.imageUrl}
					name={subDepartmentsData.itLab.name}
				/>
			)}
			{route.params.subDepartmentName === 'Central Library' && (
				<AllSubDepartments
					accomodation={subDepartmentsData.itLab.accodomation}
					type={subDepartmentsData.itLab.type}
					floor={subDepartmentsData.itLab.floor}
					description={subDepartmentsData.itLab.description}
					imageUrl={subDepartmentsData.itLab.imageUrl}
					name={subDepartmentsData.itLab.name}
				/>
			)}
			{route.params.subDepartmentName === 'BUIT Library' && (
				<AllSubDepartments
					accomodation={subDepartmentsData.itLab.accodomation}
					type={subDepartmentsData.itLab.type}
					floor={subDepartmentsData.itLab.floor}
					description={subDepartmentsData.itLab.description}
					imageUrl={subDepartmentsData.itLab.imageUrl}
					name={subDepartmentsData.itLab.name}
				/>
			)}
			{route.params.subDepartmentName === 'Exhibition Centre' && (
				<AllSubDepartments
					accomodation={subDepartmentsData.itLab.accodomation}
					type={subDepartmentsData.itLab.type}
					floor={subDepartmentsData.itLab.floor}
					description={subDepartmentsData.itLab.description}
					imageUrl={subDepartmentsData.itLab.imageUrl}
					name={subDepartmentsData.itLab.name}
				/>
			)}
			{route.params.subDepartmentName === 'Seminar Hall' && (
				<AllSubDepartments
					accomodation={subDepartmentsData.itLab.accodomation}
					type={subDepartmentsData.itLab.type}
					floor={subDepartmentsData.itLab.floor}
					description={subDepartmentsData.itLab.description}
					imageUrl={subDepartmentsData.itLab.imageUrl}
					name={subDepartmentsData.itLab.name}
				/>
			)}
			{route.params.subDepartmentName === 'Director Office' && (
				<AllSubDepartments
					accomodation={subDepartmentsData.itLab.accodomation}
					type={subDepartmentsData.itLab.type}
					floor={subDepartmentsData.itLab.floor}
					description={subDepartmentsData.itLab.description}
					imageUrl={subDepartmentsData.itLab.imageUrl}
					name={subDepartmentsData.itLab.name}
				/>
			)}
			{route.params.subDepartmentName === 'Fees and Result Office' && (
				<AllSubDepartments
					accomodation={subDepartmentsData.itLab.accodomation}
					type={subDepartmentsData.itLab.type}
					floor={subDepartmentsData.itLab.floor}
					description={subDepartmentsData.itLab.description}
					imageUrl={subDepartmentsData.itLab.imageUrl}
					name={subDepartmentsData.itLab.name}
				/>
			)}
			{route.params.subDepartmentName === 'Canteen' && (
				<AllSubDepartments
					accomodation={subDepartmentsData.itLab.accodomation}
					type={subDepartmentsData.itLab.type}
					floor={subDepartmentsData.itLab.floor}
					description={subDepartmentsData.itLab.description}
					imageUrl={subDepartmentsData.itLab.imageUrl}
					name={subDepartmentsData.itLab.name}
				/>
			)}
			{route.params.subDepartmentName === 'Computer Science' && (
				<AllSubDepartments
					accomodation={subDepartmentsData.itLab.accodomation}
					type={subDepartmentsData.itLab.type}
					floor={subDepartmentsData.itLab.floor}
					description={subDepartmentsData.itLab.description}
					imageUrl={subDepartmentsData.itLab.imageUrl}
					name={subDepartmentsData.itLab.name}
				/>
			)}
			{route.params.subDepartmentName === 'Information Technology' && (
				<AllSubDepartments
					accomodation={subDepartmentsData.itLab.accodomation}
					type={subDepartmentsData.itLab.type}
					floor={subDepartmentsData.itLab.floor}
					description={subDepartmentsData.itLab.description}
					imageUrl={subDepartmentsData.itLab.imageUrl}
					name={subDepartmentsData.itLab.name}
				/>
			)}
			{route.params.subDepartmentName === 'Electronics' && (
				<AllSubDepartments
					accomodation={subDepartmentsData.itLab.accodomation}
					type={subDepartmentsData.itLab.type}
					floor={subDepartmentsData.itLab.floor}
					description={subDepartmentsData.itLab.description}
					imageUrl={subDepartmentsData.itLab.imageUrl}
					name={subDepartmentsData.itLab.name}
				/>
			)}
			{route.params.subDepartmentName === 'Mechanical' && (
				<AllSubDepartments
					accomodation={subDepartmentsData.itLab.accodomation}
					type={subDepartmentsData.itLab.type}
					floor={subDepartmentsData.itLab.floor}
					description={subDepartmentsData.itLab.description}
					imageUrl={subDepartmentsData.itLab.imageUrl}
					name={subDepartmentsData.itLab.name}
				/>
			)}
			{route.params.subDepartmentName === 'Civil' && (
				<AllSubDepartments
					accomodation={subDepartmentsData.itLab.accodomation}
					type={subDepartmentsData.itLab.type}
					floor={subDepartmentsData.itLab.floor}
					description={subDepartmentsData.itLab.description}
					imageUrl={subDepartmentsData.itLab.imageUrl}
					name={subDepartmentsData.itLab.name}
				/>
			)}
		</View>
	);
};

export default SubDepartmentScreen;
