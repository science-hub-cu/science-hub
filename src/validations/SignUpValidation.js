export const signUpValidation = (
  { username, code, password, level, department },
  setErrors
) => {
  let valid = true;
  if (username === "") {
    setErrors((prevState) => ({
      ...prevState,
      username: "please enter your name",
    }));
    valid = false;
  } else if (!username.match(/^[A-Za-z]+$/)) {
    setErrors((prevState) => ({
      ...prevState,
      username: "your name should contains only letters",
    }));
    valid = false;
  }
  if (!code) {
    setErrors((prevState) => ({
      ...prevState,
      code: "please enter your code",
    }));
    valid = false;
  } else if (!code.match(/^[0-9]+$/)) {
    setErrors((prevState) => ({
      ...prevState,
      code: "please enter valid code",
    }));
    valid = false;
  } else if (code.length !== 7) {
    setErrors((prevState) => ({
      ...prevState,
      code: "the code must be 7 numbers",
    }));
    valid = false;
  }
  if (!level.label) {
    setErrors((prevState) => ({
      ...prevState,
      level: "please choose your level",
    }));
    valid = false;
  }
  if (!department.label) {
    setErrors((prevState) => ({
      ...prevState,
      department: "please choose your department",
    }));
    valid = false;
  }

  if (!password) {
    setErrors((prevState) => ({
      ...prevState,
      password: "please enter your password",
    }));
    valid = false;
  } else if (password.length < 6) {
    setErrors((prevState) => ({
      ...prevState,
      password: "password is too small",
    }));
    valid = false;
  }
  return valid;
};
export const disappearError = (inputName, errors, setErrors) => {
  setErrors((prevState) => ({ ...prevState, [inputName]: "" }));
};
