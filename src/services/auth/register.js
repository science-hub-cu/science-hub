/************************************************************
 * Register service to register user data to fire base
 * @author Mahmoud Atef
 * @description registration function to firestore
 ***************************************************************/

import {
  checkArgument,
  checkArgumentFromObject,
} from "../utils/commonCheckers";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import randomVerificationCode from "../utils/random";
import { APP_DOMAIN_FOR_EMAILS } from "../../constants/data";

export default registerUser = async (user) => {
  //----------- checkers----------------
  checkArgument(user);
  checkArgumentFromObject(user, "username");
  checkArgumentFromObject(user, "code");
  checkArgumentFromObject(user, "level");
  checkArgumentFromObject(user, "department");
  checkArgumentFromObject(user, "password");

  const auth = getAuth();
  const db = getFirestore();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      `${user.code}@${APP_DOMAIN_FOR_EMAILS}`,
      user.password
    );
    const uid = userCredential.user.uid;
    const userRef = doc(collection(db, "users"), uid);
    delete user.password;

    user.username = user.username.toLowerCase();
    await setDoc(userRef, {
      ...user,
      isVerfied: false,
      title: "",
      avatar: "",
      personWhoVerified: { code: -1, username: "" },
      verificationCode: randomVerificationCode(),
    });
  } catch (err) {
    throw err;
  }
};

// const forgetPassword = () => {};
