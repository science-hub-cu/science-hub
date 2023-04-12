export const signInValidation = (
  { username ,password},
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
