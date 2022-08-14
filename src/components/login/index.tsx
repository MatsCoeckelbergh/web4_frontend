import axios, { AxiosResponse } from 'axios';
import '../../App.css'
import Photo from '../../Images/lock.png'
import React, { useState, useEffect } from 'react';
import { StatusMessage, Student } from '../../types';
import StudentService from '../../services/StudentService';


const Login: React.FC = () => {

    const [nameInput, setNameInput] = useState<string>('');
    const [statusMessages, setStatusMessages] = useState<StatusMessage[]>([]);

    const login = async (nameInput: string) => {
            StudentService.login(nameInput)
    }

    const handleSubmit = (event: any) => {
                event.preventDefault();
                if (nameInput.trim() === '') {
                    setStatusMessages([{ message: 'Please fill in name.', type: 'error' }]);
                } else {
                    login(nameInput);
                }
            };
    



    return (
       <>
       <header>
                <div className='three'>
                <h4>FakeBook</h4>
            </div>
                
                
            </header>
            <div className='user-login-box'>
            <form onSubmit={handleSubmit} className='login'>
            <div className='login__field'>
            <h2>Please login to enter our site! </h2>
                         <input
                            className="login__input"
                            type="text"
                            placeholder='User name'
                            value={nameInput}
                            onChange={(event) => setNameInput(event.target.value)}
                        />
            </div>
            <button className="button login__submit">
                <span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
                </button>
            </form>
            <span className='user-icon'>
                    <img src={Photo}/>
            </span>
            </div>
            <div>
        <svg className='waves' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(151,74,15,0.7" />
        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(151,74,15,0.5)" />
        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(151,74,15,0.3)" />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(151,74,15)" />
        </g>
        </svg>
        </div>
        </>
    );
};

export default Login;