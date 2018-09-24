//Request test

import React, {Component} from "react";
import AuthService from "./AuthService";
import withAuth from "./withAuth";
const Auth = new AuthService();

class Test extends Component{

  constructor(){
    super();
    this.state = {
      hits : []
    }
    this.getData = this.getData.bind(this);
  }



  render(){
    return(
      <div className="Test">
        <button type="button" onClick={this.getData}>Send</button>
        <div className="tests">
          {this.state.hits.map(d => <div> {d.name} </div>)}
        </div>
      </div>
    )
  }

  getData(){
   fetch('http://127.0.0.1:8000/api/user',{
     methods: "GET",
     headers:{
       "Accept":"application/json",
       "Content-Type":"application/json",
       "Access-Control-Allow-Origin":"http://127.0.0.1:8000",
       "Authorization": `Bearer ${Auth.getToken()}`
     }
   }).then(response => response.json())
     .then(data => {

       this.setState({hits: data})
     })
  }
}
export default withAuth(Test);
