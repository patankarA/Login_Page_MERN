import React from "react";
import { useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function Signup() {
    const[name, setName]= useState();
    const[email, setEmail]= useState();
    const[password, setPassword]= useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/register',{name,email,password})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center aligan-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>

                    <div className='mb-3'>
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label><br />
                            <input 
                              type="text"
                              placeholder="Enter Name"
                              autoComplete="off"
                              name="email"
                              className="from-control rounded-0"
                              onChange={(e)=>setName(e.target.value)} 
                            />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label><br />
                            <input
                              type="email"
                              placeholder="Enter Email"
                              autoComplete="off"
                              name="email"
                              className="from-control rounded-0"
                              onChange={(e)=>setEmail(e.target.value)} 

                            />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label><br />
                            <input 
                              type="password"
                              placeholder="Enter Passaword"
                              name="password"
                              className="from-control rounded-0"
                              onChange={(e)=>setPassword(e.target.value)}
                            />
                        
                    </div>

                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>

                </form>

                    <p>Already have an account</p>
                    <Link to="/login" className="btn btn-default border w-100 bg-info rounded-0 text-decoration-none">
                        Login
                    </Link>

                
            </div>
           
        </div>
    );
}

export default Signup