import utils from '@/utils/index.js'
 
export default function ({route, req, res, redirect}) {
  let isClient = process.client;
  let isServer = process.server;
  let redirectURL = '/login';
  var token, path;
  //在服务端
  if (isServer) {
    let cookies = utils.getcookiesInServer(req);
    token = cookies.token ? cookies.token : ''
  }
  //在客户端判读是否需要登陆
  if (isClient) {
    token = utils.getcookiesInClient('token')
  }
  //需要进行权限判断的页面开头
  if (!token) {
      if(route.path == "/register" || route.path == "/login"){
        
      }else{
        redirect("/login")
      }
       
  }
}