import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import "./LoginPage.css";

export const LoginPage = () =>  {

  const [form, setForm] = useState({
    username:'',
    password:'',
  })

  const handleChange = (e)=>{
      setForm({
          ...form,
          [e.target.name]: e.target.value
      })
  }

  const loginUser = async(e)=>{
      try{
          e.preventDefault()
          const {data} = await axios.post('http://localhost:2651/user/login', form)
          if(data) localStorage.setItem('userLogged', true)
          location.replace("/");
      }catch(err){
        throw new Error('Error login in') 
      }
  }

  return (
    <div className='p-4 m-4 d-grid gap-2 col-6 mx-auto'>
      <form className=''>

        <h3 className='text-center'>Login</h3>

        <div className="mb-2">
          <label>Username</label>
          <input onChange={handleChange} name="username" type="text" className="form-control" placeholder="Insert username" required />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input onChange={handleChange} type="password" name="password" className="form-control" placeholder="Insert password" required />
        </div>

        <div className="mb-3">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="dropdownCheck2"/>
            <label className="form-check-label">Remember me</label>
          </div>
        </div>

        <div className="justify-content-center">
          <button onClick={(e)=> loginUser(e)} type="submit" className="btn btn-primary mb-3 col-12">Iniciar Sesión</button>
        </div>

        <div className="d-md-flex justify-content-center">
          <p className="forgot-password text-right">Aún no tienes cuenta?</p>
        </div>

        <div className="d-md-flex justify-content-center">
          <Link to='/register'>
              <button type="submit" className="btn btn-success mb-3 col-lg-12">Registrate</button>
          </Link>
        </div>

      </form>
    </div>
  );
}