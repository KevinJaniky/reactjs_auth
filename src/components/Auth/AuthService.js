import decode from "jwt-decode";

export default class AuthService {

  constructor(domain){
    this.domain = domain || "http://127.0.0.1:8000";
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
 

  }

  login(username,password){
    return this.fetch(`${this.domain}/oauth/token`, {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password,
        client_secret : "HzZ44j1xL3JkUSD9GLbDbAwrsepLZReJETwOUpo3",
        grant_type: "password",
        client_id: 2,
        remember_me: false
      })
    }).then( res => {
      this.setToken(res.access_token);
      return Promise.resolve(res);
    }).catch(e => {
      console.warn(e);
    })
  }

  fetch(url,options){
    const header = {
      "Accept":"application/json",
      "Content-Type":"application/json",
      "Access-Control-Allow-Origin":"http://127.0.0.1:8000"
    };
    if(this.loggedIn())
    {
      header['Authorization'] = `Bearer ${this.getToken()}`
    }


    return fetch(url,{
      header,
        ...options
    }).then(data => data.json())
      .then(data => data);

  }

  getToken(){
    return localStorage.getItem('id_token');
  }

  setToken(token){
    return localStorage.setItem('id_token',token);
  }

  loggedIn(){
    const token = this.getToken();
    return !!token && this.isTokenExpired(token)
  }

  isTokenExpired(token){
    try {
      const decoded = decode(token);
      if(decoded.exp < Date.now() / 100){
        return true;
      }else{
        return false
      }
    }
    catch (e){
      return false;
    }
  }

  logout(){
    localStorage.removeItem('id_token');
  }
  getProfile(){
    return decode(this.getToken());
  }

  _checkStatus(response){
    if(response.status >= 200 && response.status < 300){
      return response;
    }
    else{
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
}