import { isValidUserName, isValidPassword } from "./CommonValidation";

export const signInValidation = ({ username, password }, addError) => {
  let valid = true;
  if (!isValidUserName(username)) {
    addError({ username: "your name should contains only letters" });
    valid = false;
  }
  if (!isValidPassword(password)) {
    addError({
      password: "password must be at least 6 digits",
    });

    valid = false;
  }
  return valid;
};
