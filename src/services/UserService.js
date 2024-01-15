import { getAuth, signInWithCustomToken } from "@firebase/auth";
import {
  isValidDepartment,
  isValidFacultyCode,
  isValidLevel,
  isValidPassword,
  isValidUserName,
} from "../validations/CommonValidation";
import Client from "./api/Client";
import {
  checkArgument,
  checkArgumentFromObject,
} from "../utils/commonCheckers";
import { storeUserData } from "../Storage/SaveData";
import { Decode } from "./Functions/Decode";
import { setCredentials } from "../redux/AuthSlice";

export default class UserService {
  static async registerNewUser(user, signUp, dispatch) {
    try {
      //----------- checkers----------------
      checkArgument(user);
      checkArgumentFromObject(user, "username", isValidUserName);
      checkArgumentFromObject(user, "code", isValidFacultyCode);
      checkArgumentFromObject(user, "level", isValidLevel);
      checkArgumentFromObject(user, "department", isValidDepartment);
      checkArgumentFromObject(user, "password", isValidPassword);
      const signUpResult = await signUp(user);
      if (signUpResult.data) {
        const token = signUpResult.data.access_token;
        const User = Decode(token);
        dispatch(setCredentials(User));
      }
    } catch (error) {
      throw error;
    }
  }
  static async signInUser(user, signIn, dispatch) {
    try {
      // get token
      const signInResult = await signIn(user);

      if (signInResult.data) {
        const token = signInResult.data.access_token;
        const User = Decode(token);
        dispatch(setCredentials(User));
      }
      // sign in by token
    } catch (error) {
      throw error;
    }
  }

  static async getCurrentUserData(token, CheckAuth) {
    try {
      // get token
      const CheckAuthResult = await CheckAuth(token);

      return CheckAuthResult.data;
    } catch (error) {
      throw error;
    }
  }

  static async verifyUser(code) {
    try {
      // get token
      return await Client.sendPostRequest(
        Client.endPoints.VERIFY_USER,
        { code },
        getAuth().currentUser
      );
    } catch (error) {
      console.log(error.response.data);
      throw error;
    }
  }

  static async changeUserName(username) {
    try {
      // get token
      return await Client.sendPostRequest(
        Client.endPoints.CHANGE_USERNAME,
        { username },
        getAuth().currentUser
      );
    } catch (error) {
      throw error;
    }
  }
  static async changePassword(oldpassword, password) {
    try {
      // get token
      return await Client.sendPostRequest(
        Client.endPoints.CHANGE_USERNAME,
        { oldpassword, password },
        getAuth().currentUser
      );
    } catch (error) {
      throw error;
    }
  }
  static async changeDepartment(department) {
    try {
      // get token
      return await Client.sendPostRequest(
        Client.endPoints.CHANGE_DEPARTMENT_LEVEL,
        { department },
        getAuth().currentUser
      );
    } catch (error) {
      throw error;
    }
  }
  static async changeLevel(level) {
    try {
      // get token
      return await Client.sendPostRequest(
        Client.endPoints.CHANGE_DEPARTMENT_LEVEL,
        { level },
        getAuth().currentUser
      );
    } catch (error) {
      throw error;
    }
  }

  static async signOut() {
    await getAuth().signOut();
  }
}
