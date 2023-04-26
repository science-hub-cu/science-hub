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

export default class UserService {
  static async registerNewUser(user) {
    try {
      //----------- checkers----------------
      checkArgument(user);
      checkArgumentFromObject(user, "username", isValidUserName);
      checkArgumentFromObject(user, "code", isValidFacultyCode);
      checkArgumentFromObject(user, "level", isValidLevel);
      checkArgumentFromObject(user, "department", isValidDepartment);
      checkArgumentFromObject(user, "password", isValidPassword);

      const { token } = await Client.sendPostRequest(
        Client.endPoints.USER_ROUTE,
        user
      );
      //   console.log(data);
      const auth = getAuth();
      await signInWithCustomToken(auth, token);
    } catch (error) {
      throw error;
    }
  }
  static async signInUser(userorcode, password) {
    try {
      // get token
      const { token } = await Client.sendPostRequest(
        Client.endPoints.AUTH_USER,
        {
          userorcode,
          password,
        }
      );
      // sign in by token
      await signInWithCustomToken(getAuth(), token);
    } catch (error) {
      throw error;
    }
  }

  static async getCurrentUserData() {
    try {
      // get token
      const { user } = await Client.sendGetReuest(
        Client.endPoints.AUTH_USER,
        {},
        getAuth().currentUser
      );
      return user;
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
