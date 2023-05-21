import CourseImage from "../assets/faculty/course.png";
import adminImage from "../assets/faculty/admin.png";
import hodImage from "../assets/faculty/hod.png";
import satyaImage from "../assets/faculty/satya.jpg";
import officeImage from "../assets/faculty/office.jpg";
import directorImage from "../assets/faculty/direct.jpg";

export const facultyMemberData = [
  {
    name: "Courses Offered",
    image: CourseImage,
    subCourses: [
      { name: "Sub Course A1" },
      { name: "Sub Course A2" },
      { name: "Sub Course A3" },
    ],
  },
  {
    name: "Administration",
    image: adminImage,
    subCourses: [{ name: "admin 1" }, { name: "admin 2" }],
  },
  {
    name: "HOD",
    image: hodImage,
    subCourses: [{ name: "admin 1" }, { name: "admin 2" }],
  },
  {
    name: "Satya Bhavan",
    image: satyaImage,
    subCourses: [{ name: "admin 1" }, { name: "admin 2" }],
  },
  {
    name: "Office",
    image: officeImage,
    subCourses: [{ name: "admin 1" }, { name: "admin 2" }],
  },
  {
    name: "Director",
    image: directorImage,
    subCourses: [{ name: "admin 1" }, { name: "admin 2" }],
  },
];
