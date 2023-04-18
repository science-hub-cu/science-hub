export const disappearError = (inputName, errors, setErrors) => {
  setErrors((prevState) => ({ ...prevState, [inputName]: "" }));
};
