import {
  isValidUserName,
  isValidPassword,
  isValidFacultyCode,
} from "./CommonValidation";

export const signInValidation = ({ username, password }, addError) => {
  let isValid = true;

  const firstLetter = username.charAt(0);

  if (firstLetter >= "0" && firstLetter <= "9") {
    if (!isValidFacultyCode(username)) {
      addError({ username: "Please enter a valid faculty code." });
      isValid = false;
    }
  } else if (!isValidUserName(username)) {
    addError({ username: "Your name should only contain letters." });
    isValid = false;
  }

  if (!isValidPassword(password)) {
    addError({ password: "Password must be at least  characters long." });
    isValid = false;
  }

  return isValid;
};
