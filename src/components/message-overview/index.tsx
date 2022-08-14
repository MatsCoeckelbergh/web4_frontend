import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import { useInterval } from 'usehooks-ts'
import MessageService from '../../services/MessageService';
import { Message } from '../../types';
import MessageOverviewTable from './MessageOverviewTable';


const MessageOverview: React.FC = () => {
    const [message, setStatusMessages] = useState<Message[]>([]);
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

    useEffect(() => {
        getMessages();
    }, []);

    useInterval(()=>{
        getMessages();
    }, 5000);

    const getMessages = async () => {
        const res: AxiosResponse<Message[]> = await MessageService.getAllMessages(sessionStorage.getItem("user"));
        setStatusMessages(res.data);
    };

    return (
        <section className="row justify-content-center">
            <h3>Latest messages</h3>
            <MessageOverviewTable
                messages={message}
                setSelectedMessage={setSelectedMessage}
            />
           
        </section>
    );
};


export default MessageOverview;
