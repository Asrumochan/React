import React from 'react'

const login = () => {
  return (
    <div><form>

        <div class="container">  
            <h1>Login Form</h1>
            <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" required/>  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required/>  
            <button type="submit">Login</button> <br></br> 
            <input type="reset" value="Reset"/><br></br>
            <input type="checkbox" checked="checked"/> Remember me  
            <a href="#"> Forgot password? </a>  
        </div>  
    </      form>
    </div>
  )
}

export default login
