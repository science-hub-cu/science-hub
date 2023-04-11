import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { checkArgument } from "../utils/commonCheckers";
import { APP_DOMAIN_FOR_EMAILS } from "../../constants/data";
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  query,
  where,
} from "@firebase/firestore";
import { isValidFacultyCode } from "../../validations/CommonValidation";

// helper function just to convert code to code@host
const codeToEmail = (code) => `${code}@${APP_DOMAIN_FOR_EMAILS}`;

/**
 * Login by code
 * @author Mahmoud Atef
 * @param code faculty code to login by it
 * @param password password to login
 * @description this is simple function to login by faculty code and password.
 */
const loginByCode = async (code, password) => {
  checkArgument(code);
  checkArgument(password);

  const auth = getAuth();
  try {
    const credential = await signInWithEmailAndPassword(
      auth,
      codeToEmail(code),
      password
    );

    return credential.user;
  } catch (err) {
    throw err;
  }
};

/**
 * Login by username
 * @author Mahmoud Atef
 * @param username username to login by it
 * @param password password to login
 * @description this function request to firestore by username to
 *              get code that map to it then use this code in regular auth login
 */
const loginByUsername = async (username, password) => {
  checkArgument(username);
  checkArgument(password);

  const db = getFirestore();
  try {
    const q = query(
      collection(db, "users"),
      where("username", "==", username),
      limit(1)
    );

    const querySnapshot = await getDocs(q);
    let code;
    querySnapshot.forEach((doc) => (code = doc.data().code));

    return loginByCode(code, password);
  } catch (error) {
    throw error;
  }
};

/**
 * @author Mahmoud Atef
 * @param {code/username to login} email
 * @param {password for login proccess} password
 * @description this function take code or username then detect if it code user
 *              it for login otherwise use it as username and do loginByUsername proccess
 */
export const loginUser = async (email, password) => {
  email = email.toLowerCase();
  try {
    if (isValidFacultyCode(email)) {
      return await loginByCode(email, password);
    } else {
      return await loginByUsername(email, password);
    }
  } catch (err) {
    throw err;
  }
};
