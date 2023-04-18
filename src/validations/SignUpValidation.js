import {
  isValidFacultyCode,
  isValidUserName,
  isValidLevel,
  isValidDepartment,
  isValidPassword,
} from "./CommonValidation";

export const signUpValidation = (
  { username,code, password, level, department },
  addError
) => {
  let valid = true;
  if (!isValidUserName(username)) {
    addError({ username: "your name should contains only letters" });
    valid = false;
  }
  if (!isValidFacultyCode(code)) {
    addError({ code: "invalid code (must be 7 numbers only)" });
    valid = false;
  }
  if (!isValidLevel(level)) {
    addError({ level: "you must choose your level" });
    valid = false;
  }
  if (!isValidDepartment(department)) {
    addError({ department: "you must choose your department" });
    valid = false;
  }

  if (!isValidPassword(password)) {
    addError({
      password:
        "password must be at least 6 digits",
    });

    valid = false;
  }
  return valid;
};
