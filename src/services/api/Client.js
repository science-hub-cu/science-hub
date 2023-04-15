import axios from "axios";

export default class Client {
  static apiUrl = "http://192.168.1.3:5000/api";
  static endPointToUrl(endPoint) {
    return `${Client.apiUrl}${endPoint}`;
  }
  static get endPoints() {
    return {
      AUTH_USER: "/auth",
      USER_ROUTE: "/user",
    };
  }

  static async sendPostRequest(endPoint, body, authUser) {
    try {
      const header = authUser
        ? { "auth-token": await authUser.getIdToken(/* forceRefresh */ true) }
        : {};

      const response = await axios.post(
        Client.endPointToUrl(endPoint),
        body,
        header
      );
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
