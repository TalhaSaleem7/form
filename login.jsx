import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Loginf(){

    const [email,setEmail]= useState()
    const [password,setPassword]=useState()
    const navigate = useNavigate()

    

    const handleSubmit= (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/login',{email,password})
        .then((result)=>{
                console.log(result)
                if(result.data==="success")
                
                {
                navigate('/home')
            }


        })
        .catch((err)=>console.log(err))

    }


   return (
        <div>
            <body>
  <div class="login-container">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="Email">Email:</label>
        <input type="text" id="email" name="email" required
        onChange={(e)=>setEmail(e.target.value)}

        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required
        onChange={(e)=>setPassword(e.target.value)}
        
        />
      </div>

    {/* {/* <Link to={'/home'}> */}
      <button type="submit">Login</button>
      {/* </Link> */} 
    </form>
  </div>
</body>
        </div>

   )
}


export default Loginf;