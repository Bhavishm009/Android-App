import axios from 'axios';

const makeApiCall = async (url, method, headers, data) => {
  try {
    const response = await axios({
      url,
      method,
      headers,
      data,
    });

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default makeApiCall;
