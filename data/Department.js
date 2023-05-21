import chemistryImage from '../assets/chemistry.jpg';
import computer from '../assets/computer.jpg';

export const departments = [
	{
		name: 'labs',
		subDepartments: [
			{
				// name: 'Sub-Department 1',
				name: 'Chemistry Lab',
				photo:
					'https://thumbs.dreamstime.com/b/chemistry-laboratory-woman-pipettes-test-tubes-chemistry-laboratory-woman-pipettes-114782620.jpg',
			},
			{
				// name: 'Sub-Department 2',
				name: 'Computer Science Lab',
				photo:
					'https://www.diamondacademyjodhpur.com/Uploads/fileupload/385pic%2031.jpg',
			},
			{
				// name: 'Sub-Department 2',
				name: 'IT Lab',
				photo:
					'https://www.mehnazfatimafoundation.org.pk/wp-content/uploads/2019/12/it-lab-1024x561.jpg',
			},
			{
				// name: 'Sub-Department 2',
				name: 'Mech Lab',
				photo:
					'https://engineering.tamu.edu/mechanical/_files/_images/_content-images/LAB-MEEN-CiMDM.jpg',
			},
			{
				// name: 'Sub-Department 2',
				name: 'Electronics Lab',
				photo:
					'https://www.reichelt.com/magazin/wp-content/uploads/2021/11/AdobeStock_183227128_klein.jpg',
			},
		],
	},
	{
		name: 'library',
		subDepartments: [
			{
				// name: 'Sub-Department 1',
				// name: 'Sub-Department 1',
				name: 'Central Library',
				photo: 'https://images.indianexpress.com/2018/05/library.jpg',
			},
			{
				// name: 'Sub-Department 2',
				name: 'BUIT Library',
				photo: 'https://school.vssc.gov.in/assets/img/slide/slide-2_large.jpg',
			},
		],
	},
	{
		name: 'Exhibition centre',
		subDepartments: [
			{
				// name: 'Sub-Department 1',
				// name: 'Sub-Department 1',
				name: 'Exhibition Centre',
				photo:
					'https://lh5.googleusercontent.com/p/AF1QipPXbfd03DMHe2O_VKeCP8hK2x87NFnO0v815h3s',
			},
		],
	},
	{
		name: 'Hall',
		subDepartments: [
			{
				// name: 'Sub-Department 1',
				// name: 'Sub-Department 1',
				name: 'Seminar Hall',
				photo:
					'https://cashew.icar.gov.in/wp-content/uploads/2021/03/kn-61.jpg',
			},
		],
	},
	{
		name: 'Offices',
		subDepartments: [
			{
				name: 'Director Office',
				photo:
					'https://cashew.icar.gov.in/wp-content/uploads/2021/03/kn-61.jpg',
			},
			{
				name: 'Fees and Result Office',
				photo:
					'https://sngcollegechelannur.edu.in/profile/College%20Office.jpg',
			},
		],
	},
	{
		name: 'Canteen',
		subDepartments: [
			{
				name: 'Canteen',
				photo:
					'https://www.christiancollege.in/wp-content/uploads/2019/07/canteen-3.jpg',
			},
		],
	},
	{
		name: 'Branches',
		subDepartments: [
			{
				name: 'Computer Science',
				photo:
					'https://cashew.icar.gov.in/wp-content/uploads/2021/03/kn-61.jpg',
			},
			{
				name: 'Information Technology',
				photo:
					'https://sngcollegechelannur.edu.in/profile/College%20Office.jpg',
			},
			{
				name: 'Electronics',
				photo:
					'https://sngcollegechelannur.edu.in/profile/College%20Office.jpg',
			},
			{
				name: 'Mechanical',
				photo:
					'https://sngcollegechelannur.edu.in/profile/College%20Office.jpg',
			},
			{
				name: 'Civil',
				photo:
					'https://sngcollegechelannur.edu.in/profile/College%20Office.jpg',
			},
		],
	},
];

export const subDepartmentsData = {
	chemistryLab: {
		name: 'Chemistry Lab',
		description: `Our chemistry lab is equipped with state-of-the-art tools and equipment for conducting a wide range of chemical experiments. The lab is divided into different sections, each with its unique set of equipment and safety protocols. We have dedicated areas for handling hazardous chemicals and substances, as well as designated spaces for organic and inorganic chemistry experiments. Additionally, we have a fume hood to extract harmful vapors and a ventilation system that ensures fresh air circulation throughout the lab.The analytical chemistry section is dedicated to the analysis of chemical compounds using advanced techniques such as chromatography, spectroscopy, and mass spectrometry. This section is equipped with a range of analytical instruments to provide accurate and reliable results.
			The physical chemistry section is designed to support studies on physical properties of chemical systems such as thermodynamics, kinetics, and electrochemistry. This section is equipped with specialized equipment such as calorimeters, polarimeters, and potentiometers.
			The lab's facilities are complemented by an extensive library of reference materials, journals, and software programs relevant to the field of chemistry. Researchers and students can access these resources to support their research endeavors.
			Safety is a top priority in our chemistry lab, and we have implemented strict safety protocols to ensure the well-being of everyone who uses the facility. We have equipped the laboratory with state-of-the-art fire suppression systems, emergency showers, and eyewash stations. Additionally, all users of the lab must undergo rigorous training on proper handling and disposal of chemicals before being granted access to the facility.`,
		accodomation: '100-150 people',
		floor: 'Ground floor',
		type: 'labs',
		imageUrl: chemistryImage,
	},
	computerScienceLab: {
		name: 'Computer Science Lab',
		description: `Our Computer Science lab is equipped with state-of-the-art tools and equipment for conducting a wide range of chemical experiments. The lab is divided into different sections, each with its unique set of equipment and safety protocols. We have dedicated areas for handling hazardous chemicals and substances, as well as designated spaces for organic and inorganic chemistry experiments. Additionally, we have a fume hood to extract harmful vapors and a ventilation system that ensures fresh air circulation throughout the lab.The analytical chemistry section is dedicated to the analysis of chemical compounds using advanced techniques such as chromatography, spectroscopy, and mass spectrometry. This section is equipped with a range of analytical instruments to provide accurate and reliable results.
			The physical chemistry section is designed to support studies on physical properties of chemical systems such as thermodynamics, kinetics, and electrochemistry. This section is equipped with specialized equipment such as calorimeters, polarimeters, and potentiometers.
			The lab's facilities are complemented by an extensive library of reference materials, journals, and software programs relevant to the field of chemistry. Researchers and students can access these resources to support their research endeavors.
			Safety is a top priority in our chemistry lab, and we have implemented strict safety protocols to ensure the well-being of everyone who uses the facility. We have equipped the laboratory with state-of-the-art fire suppression systems, emergency showers, and eyewash stations. Additionally, all users of the lab must undergo rigorous training on proper handling and disposal of chemicals before being granted access to the facility.`,
		accodomation: '80-100 people',
		floor: 'Ground floor',
		type: 'labs',
		imageUrl: computer,
	},
	itLab: {
		name: 'IT Lab',
		description: `Our IT lab is equipped with state-of-the-art tools and equipment for conducting a wide range of chemical experiments. The lab is divided into different sections, each with its unique set of equipment and safety protocols. We have dedicated areas for handling hazardous chemicals and substances, as well as designated spaces for organic and inorganic chemistry experiments. Additionally, we have a fume hood to extract harmful vapors and a ventilation system that ensures fresh air circulation throughout the lab.The analytical chemistry section is dedicated to the analysis of chemical compounds using advanced techniques such as chromatography, spectroscopy, and mass spectrometry. This section is equipped with a range of analytical instruments to provide accurate and reliable results.
			The physical chemistry section is designed to support studies on physical properties of chemical systems such as thermodynamics, kinetics, and electrochemistry. This section is equipped with specialized equipment such as calorimeters, polarimeters, and potentiometers.
			The lab's facilities are complemented by an extensive library of reference materials, journals, and software programs relevant to the field of chemistry. Researchers and students can access these resources to support their research endeavors.
			Safety is a top priority in our chemistry lab, and we have implemented strict safety protocols to ensure the well-being of everyone who uses the facility. We have equipped the laboratory with state-of-the-art fire suppression systems, emergency showers, and eyewash stations. Additionally, all users of the lab must undergo rigorous training on proper handling and disposal of chemicals before being granted access to the facility.`,
		accodomation: '80-100 people',
		floor: 'First floor',
		type: 'labs',
		imageUrl: computer,
	},
};
