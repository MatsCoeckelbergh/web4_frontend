import axios from '../axios';
import { Message, Response } from '../types';

const getAllMessages = (username: string | null) => axios.get<Message[]>('/messages',{params: {user: username}});




const addMessage = (name:string |null, message: string| null) => axios.post<Response>('/messages', {user: name, message: message });

const MessageService = {
    getAllMessages,
    addMessage,
};

export default MessageService;
