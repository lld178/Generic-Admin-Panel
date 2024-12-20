import requests from "./api";
export const captchaApi = () => requests({
  url: '/prod-api/captchaImage',
  method: 'get'
}) 
export const LoginApi = (p:any) => requests({
  url: '/prod-api/login',
  method: 'get',
  data:p
}) 