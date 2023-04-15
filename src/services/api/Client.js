/*** Client class
 * @description class has static methods that work with API
 * @author Mahmoud Atef
 */

import axios from "axios";

export default class Client {
  static apiUrl = "https://cs303-backend-server.onrender.com/api";
  static endPointToUrl(endPoint) {
    return `${Client.apiUrl}${endPoint}`;
  }
  static get endPoints() {
    return {
      AUTH_USER: "/auth",
      USER_ROUTE: "/user",
      VERIFY_USER: "/user/verify",
    };
  }

  static async sendPostRequest(endPoint, body, authUser) {
    try {
      const headers = authUser
        ? { "auth-token": await authUser.getIdToken(/* forceRefresh */ true) }
        : {};

      const response = await axios.post(Client.endPointToUrl(endPoint), body, {
        headers,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  static async sendGetReuest(endPoint, params, authUser) {
    try {
      const headers = authUser
        ? { "auth-token": await authUser.getIdToken(/* forceRefresh */ true) }
        : {};

      const response = await axios.get(Client.endPointToUrl(endPoint), {
        params,
        headers,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
