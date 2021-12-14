import  Axios from "axios";

export const getInstance = async () => {
    const axiosInstance = Axios.create({
      baseURL: 'http://21d2-177-76-235-227.ngrok.io',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    return axiosInstance;
  };