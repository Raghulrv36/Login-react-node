import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function App()
{
  const navigate = useNavigate()
  const [user,setuser] = useState("")
  const [pass,setpass] = useState("")

  function handleuser(evt)
  {
    setuser(evt.target.value)
  }
  function handlepass(evt)
  {
    setpass(evt.target.value)
  }

  function check()
  {
    var logindetails = axios.get(`http://localhost:5000/login?username=${user}&password=${pass}`)
    logindetails.then(function(data){
      console.log(data)
      if(data.data===true)
      {
        navigate("/success")
      }
      else{
        navigate("/fail")
      }
    })
  }

  return(
    <div class="container">
      <h1>Login</h1>
      <div className="input-box">
      <input onChange={handleuser} name="username" placeholder="username"></input> 
      </div>
      <div className="input-box">
      <input onChange={handlepass} name="password" placeholder="password"></input>
      </div>
      <button onClick={check}>Login</button> 
      <div className="register">
      <span>Don't have an account? <a href="">Register</a></span>
      </div>
    </div>
  )
}

export default App