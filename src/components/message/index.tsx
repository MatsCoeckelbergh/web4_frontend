import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import MessageService from '../../services/MessageService';
import { StatusMessage, Message } from '../../types';


const AddMessage: React.FC = () => {
    const [messageInput, setMessageInput] = useState<string>('');
    const [statusMessages, setStatusMessages] = useState<StatusMessage[]>([]);




    const addMessage = async ( messageInput: string) => {
        MessageService.addMessage(sessionStorage.getItem("user"), messageInput)
}

const handleSubmit = (event: any) => {
            event.preventDefault();
            if (messageInput.trim() === '') {
               setStatusMessages([{ message: 'Please fill in name.', type: 'error' }]);
            } else {
                addMessage(messageInput);
                setMessageInput('')
            }
        };



    return (
        <section className="publish_message">
            <h3>Publish message: </h3>
            <form onSubmit={handleSubmit}>
                <div className='login_input'>
                         <textarea
                            className="message_input"
                            placeholder='Your message'
                            value={messageInput}
                            maxLength={256}
                            onChange={(event) => setMessageInput(event.target.value)}
                        />
            </div>
            <button className="status__submit">
                <span className="button__text">Publish message!</span>
                </button>
            </form>
        
        </section>
    );
};

export default AddMessage;
