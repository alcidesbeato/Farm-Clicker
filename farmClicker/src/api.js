import  Axios from "axios";

export const getInstance = async () => {
    const axiosInstance = Axios.create({
      baseURL: 'https://farm-clicker-banco.herokuapp.com',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    return axiosInstance;
  };