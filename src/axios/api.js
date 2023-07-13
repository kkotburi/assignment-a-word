import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL
  // timeout: 1
});

instance.interceptors.request.use(
  // 요청을 보내기 전 수행되는 함수
  function (config) {
    console.log('interceptor 요청 성공!');
    return config;
  },
  // 오류 요청을 보내기 전 수행되는 함수
  function (error) {
    console.log('interceptor 요청 오류!');
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  // 요청을 보내기 전 수행되는 함수
  function (response) {
    console.log('interceptor 응답 성공!');
    return response;
  },
  // 오류 요청을 보내기 전 수행되는 함수
  function (error) {
    console.log('interceptor 응답 오류!');
    return Promise.reject(error);
  }
);

export default instance;
