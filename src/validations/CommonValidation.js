export const isValidFacultyCode = (code) => {
  return code !== undefined && code.match(/^[0-9]+$/) && code.length === 7;
};
export const isValidUserName = (username) => {
  return username !== "" && username.match(/^[A-Za-z]+$/);
};
export const isValidLevel = (level) => {
  return level !== undefined && level !== "";
};
export const isValidDepartment = (department) => {
  return department !== undefined && department !== "";
};
export const isValidPassword = (password) => {
  return password !== undefined && password.length > 6;
};
