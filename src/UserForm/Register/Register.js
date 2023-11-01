import React ,{useEffect} from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { HireContext } from '../../App';




function Register() {
    const{setUsername} = useContext(HireContext)
    const navigate = useNavigate()
  
  
    //.....................useForm.........................//
    const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm();
  
  //..........................useEfffect.............//
  
  useEffect(()=>{
    setUsername(localStorage.getItem("userLatter"))
  },[])
  
  //.............................onclick function..........//
  
  function onSubmit(data) {
  
  
      axios.post('http://localhost:8080/userRegister', { data })
          .then((result) => {
            console.log(result.data)
              if (result.status === 200) {
                // localStorage.setItem("userLatter" ,result.data.charAt(0).toUpperCase() )
                 
                  navigate("/login")
                
              }
              else if (result.status === 202) {
                  alert(result.data)
              }
          });
  }
  
    return (
      <>
        <section className='Reg'>
          <section className='homeContent'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Name</label>
              <input placeholder='enter Full Name'  {
                          ...register('fullname', { required: true, })}></input>
                          {errors.fullname && <p role="alert">Full Name is required</p>}
  
  
              <label>Company Email</label>
              <input placeholder='Enter Company Email' type='text'
              {
                ...register('companyEmail', { required: true, })}></input>
              {errors.companyEmail && <p role="alert">Company Email is required</p>}

              <label>Username</label>
              <input placeholder='Enter username' type='text'
              {
                ...register('username', { required: true, })}></input>
              {errors.username && <p role="alert">username is required</p>}
  
              <label>Password</label>
              <input placeholder='Enter password' type='text'
              {
                ...register('password', { required: true, })}></input>
              {errors.password && <p role="alert">password is required</p>}
  
              <button type='submit'>Submit</button>
            </form>
          </section>
        </section>
      </>
    )
}

export default Register