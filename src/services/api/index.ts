import axios from 'axios';
import cookies from 'js-cookie';
import camelcaseKeys from 'camelcase-keys';

const apiService = {
  async get(
    path: string,
    disableCamelCase?: boolean,
    fullResponse: boolean = false
  ) {
    // const token = cookies.get('token');
    // if (!token) {
    //   document.location.reload();
    // }
  
    try {
      const response = await axios({
        method: 'get',
        url: `${path}`
        // headers: {
        //   Authorization: `Bearer ${token}`
        // }
      });
      return fullResponse
        ? response.data
        : disableCamelCase
        ? response.data.payload
        : camelcaseKeys(response.data, { deep: true });
    } catch (error) {
      const customError = {
        code: error !== undefined ? error.response.status : 500,
        message:
          error !== undefined
            ? error.response.data.error
              ? error.response.data.error
              : error.response.statusText
            : 'Internal Server Error'
      };
      throw customError;
    }
  },
  async post(path: string, data: any) {
    const token = cookies.get('token');
    if (!token) {
      document.location.reload();
    }
    try {
      const response = await axios({
        method: 'post',
        url: `/${path}`,
        headers: {
          Authorization: `Bearer ${token}`
        },
        data
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  async put(path: string, data: any) {
    const token = cookies.get('token');
    if (!token) {
      document.location.reload();
    }
    try {
      const response = await axios({
        method: 'put',
        url: `/${path}`,
        headers: {
          Authorization: `Bearer ${token}`
        },
        data
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  async delete(path: string, data: any) {
    const token = cookies.get('token');
    if (!token) {
      document.location.reload();
    }
    try {
      const response = await axios({
        method: 'delete',
        url: `/${path}`,
        headers: {
          Authorization: `Bearer ${token}`
        },
        data
      });
      return response.data.payload;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }
};

export default apiService;
