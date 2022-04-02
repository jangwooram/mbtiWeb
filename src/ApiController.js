import axios from "axios";

const instance = axios.create({
    baseUrl: process.env.REACT_APP_BASE_URL,
    timeout: 1000
})

instance.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem("ACCESS_TOKEN","");
        config.headers["Authorization"] = "Token " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ5NTIwNTExLCJpYXQiOjE2NDg5MTU3MTEsImp0aSI6IjAwYzQ3YWFkMWM0ZTQ4NDk4NmNlYWI5YjUxMDRiNzExIiwidXNlcl9pZCI6MX0.uatXAfS6ZFnBlaWOg3lACTIx0iEetHaGgf9WlC0Ch7w";
        
        config.headers["Content-Type"] = "application/json; charset=utf-8";
        
        return config;
    },
    function (error) {
      console.log(error);
      return Promise.reject(error);
    }
);


// instance.interceptors.response.use(
//     function (response) {
//         console.log(response);

//         return response.data.data;
        
//     },
//     function (error) {
//         errorController(error);
//     }
// );

export default instance;