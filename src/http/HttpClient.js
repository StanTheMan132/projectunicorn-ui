import axios from 'axios';

export class HttpClient {
  static async makeRequest(config) {
    const response = await axios.request(config);

    if (response.status === 500) {
      throw new Error(response.statusText);
    }

    return JSON.parse(response.data);
  }

  static get(url, headers = {}) {
    const config = {
      url,
      headers,
      method: 'GET',
      ...HttpClient.getDefaultAxiosConfig()
    };

    return this.makeRequest(config);
  }

  static post(url, body, headers = {}) {
    const config = {
      url,
      headers,
      method: 'POST',
      data: JSON.stringify(body),
      ...HttpClient.getDefaultAxiosConfig()
    };

    return this.makeRequest(config);
  }

  static put(url, body, headers = {}) {
    const config = {
      url,
      headers,
      method: 'PUT',
      data: JSON.stringify(body),
      ...HttpClient.getDefaultAxiosConfig()
    };

    return this.makeRequest(config);
  }

  static delete(url, headers = {}) {
    const config = {
      url,
      headers,
      method: 'DELETE',
      ...HttpClient.getDefaultAxiosConfig()
    };

    return this.makeRequest(config);
  }

  static getDefaultAxiosConfig() {
    const config = {
      responseType: 'application/json',
      baseURL: process.env.REACT_APP_API_URL
    };

    return config;
  }
}
