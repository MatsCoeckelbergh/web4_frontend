import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import { useInterval } from 'usehooks-ts'
import StudentService from '../../services/StudentService';
import StudentsOverviewTable from './StudentOverviewTable';
import { StatusMessage, Student } from '../../types';


const MessageOverview: React.FC = () => {
    const [friends, setStatusFriends] = useState<Student[]>([]);
    const [selectedFriends, setSelectedFriends] = useState<Student | null>(null);
    const [nameInput, setNameInput] = useState<string>('');
    const [statusMessages, setStatusMessages] = useState<StatusMessage[]>([]);
    useEffect(() => {
        getFriends();
    }, []);

    useInterval(()=>{
        getFriends();
    }, 5000);

    const getFriends = async () => {
        const res: AxiosResponse<Student[]> = await StudentService.getAllFriends(sessionStorage.getItem("user"));
        setStatusFriends(res.data);
    };

    const addFriend = async ( nameInput: string) => {
        StudentService.addFriend(sessionStorage.getItem("user"), nameInput)
}

const handleSubmit = (event: any) => {
            event.preventDefault();
            if (nameInput.trim() === '') {
               setStatusMessages([{ message: 'Please fill in name.', type: 'error' }]);
            } else {
                addFriend(nameInput);
                setNameInput('');
            }
        };


    return (
        <section className="row justify-content-center">
            <h3>Friends</h3>
            <form onSubmit={handleSubmit}>
            <div className='addFriend'>
            <div className='login__field'>
                         <input
                            className="friend_input"
                            type="text"
                            placeholder='Name friend'
                            value={nameInput}
                            onChange={(event) => setNameInput(event.target.value)}
                        />
             </div>
                <button className="friend_submit">
            <span className="button__text_little">Add friend</span>
            
            </button>
            </div>
            </form>
            <StudentsOverviewTable
                students={friends}
                setSelectedStudents={setSelectedFriends}
            />
           
        </section>
    );
};

export default MessageOverview; 