import axios, { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import { StatusMessage, Student } from '../../types';
import StudentService from '../../services/StudentService';

const status: React.FC = () => {

    const [statusInput, setStatusInput] = useState<string>('');
    const [statusMessages, setStatusMessages] = useState<StatusMessage[]>([]);

    const statusUpdate = async (statusInput: string) => {
            StudentService.statusUpdate(statusInput)
    }
    var hasStatus= false;
    const handleSubmit = (event: any) => {
                event.preventDefault();
                if (statusInput.trim() === '') {
                    setStatusMessages([{ message: 'Please fill in status.', type: 'error' }]);
                } else {
                    statusUpdate(statusInput);
                    sessionStorage.setItem("studentStatus", statusInput)
                    setStatusInput('');
                    hasStatus=true; 
                }
            };
  
    return (
       <>
            <h3 id='statusStatus'>status</h3>
            <p>Your current status: <strong>{hasStatus && (statusInput)}{!hasStatus && (sessionStorage.getItem("studentStatus"))}</strong></p>
            <form onSubmit={handleSubmit}>
            <div className='login__field'>
                         <input
                            className="login__input"
                            type="string"
                            id='inputfield'
                            placeholder='Status'
                            maxLength={30}
                            value={statusInput}
                            onChange={(event) => setStatusInput(event.target.value)}
                        />
           <button className="status__submit">
                <span className="button__text">Change status!</span>
                </button>
                </div>
                </form>
               
        </>
    );
};



export default status;