import axios from "axios";

//TODO - Token 만료시 리프레쉬와 로그인시 토큰 정보 로컬스토리지에 저장

const instance = axios.create({
    baseUrl: process.env.REACT_APP_BASE_URL,
    timeout: 1000
})

instance.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem("ACCESS_TOKEN","");
        config.headers["Authorization"] = "Token " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUwMTU0NjY0LCJpYXQiOjE2NDk1NDk4NjQsImp0aSI6ImZmMDkyYzhmNjhhZjQ1NzQ5Nzc1MTM0ZmUyYmUwY2UyIiwidXNlcl9pZCI6MX0.PhYVffDKmxHxJ3ZeIBw7p4QSIRjZD3ndPQZbkm0ZmlQ";
        
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
