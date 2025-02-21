import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch()
    
    function handleSubmit(e) {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            localStorage.setItem('uname',`${username}`);
            localStorage.setItem('pass',`${password}`);
            navigate('/sidebar')
            // alert("Success")
        }
        else {
            setError("Username or Password must be Wrong!")
        }
    }
    useEffect(()=>{
        const uname=localStorage.getItem('uname')
        const pass=localStorage.getItem('pass')
        const isLogout = localStorage.getItem('isLogout')
        // console.log(localStorage.getItem('isLogout'));
        
        if(uname&&pass){
            navigate('/sidebar')
        }
        if(isLogout==='true'){
            Swal.fire({
                title: "Successfully Loged out!",
                icon: "success"
            });
            localStorage.setItem('isLogout',false)
        }
    },[])
    return (
        <div>
            <div className="form-container mt-5">
                <div className="row">
                    <div className="login-form col-lg-4 mx-auto">
                        <form action="" onSubmit={handleSubmit}>
                            <h2 className="form-title">Sign in</h2>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input className='form-control' onChange={(e) => setUsername(e.target.value)} type="text" name="uname" id="username" minLength={4} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input className='form-control' onChange={(e) => setPassword(e.target.value)} type="password" name="pass" id="pass" minLength={4} required />
                            </div>
                            {error?<div className='text-danger'>{error}</div>:""}
                            <div className="d-flex justify-content-center align-items-center">
                                <button type="submit" className="btn-submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
