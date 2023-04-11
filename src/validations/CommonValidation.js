export const isValidFacultyCode = (code) => {
  return code !== undefined && code.match(/^[0-9]+$/) && code.length === 7;
};
