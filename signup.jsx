import React from "react";
import {Link} from 'react-router-dom';

import './index.css'
import { useState } from "react";
import axios from 'axios'
import {useNavigate } from "react-router-dom";

function Signup () {

    const [name,setName]= useState()
    const [email,setEmail]= useState()
    const [password,setPassword]= useState()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/signup',{email,name,password})

        .then((result)=>console.log(result)
        ,navigate('/login'))
            
        
        
        .catch((err)=>console.log(err))
    }



        return( 
        <div>
            
            
    <body>  

    <form  onSubmit={handleSubmit}>
    
  <div class="login-container">  
    <h2>SignUP</h2>
    
      <input type="text" placeholder="Email" required
        onChange={(e)=>setEmail(e.target.value)}

      /><br/>
      <input type="text" placeholder="Username" required

            onChange={(e)=> setName(e.target.value)}

      /><br/>


      <input type="password" placeholder="Password" required
      
            onChange={(e)=>setPassword(e.target.value)}
      
      
      /><br/>
        {/* <button type="submit">Signup</button> */}
      {/* <Link to='/login'> */}
      <button type="submit">Signup</button>
      {/* </Link> */}
                {/* <Link to='/login'>
      <button type="submit">Login</button>
        </Link> */}
 </div>

 </form>

    </body>

    </div>
            


        )

}

export default Signup;