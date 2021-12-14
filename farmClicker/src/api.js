import  Axios from "axios";

export const getInstance = async () => {
    const axiosInstance = Axios.create({
      baseURL: 'http://8954-177-76-235-227.ngrok.io',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    return axiosInstance;
  };