/* Generated with ChatGPT

Prompt: From the agencyStaff array, generate an arrow function that extracts all unique project titles and organize them in a Javascript array of strings.

*/
import agencyStaff from "./staff_mock.js/index.js";

export const getUniqueProjects = () => {
  return new Set(agencyStaff.flatMap((person) => person.projects));
};

/* 
const getUniqueProjects = (staffArray) => [
  ...new Set(staffArray.flatMap((person) => person.projects)),
];

Example usage:
  const uniqueProjects = getUniqueProjects(agencyStaff);
  console.log(uniqueProjects);
*/
