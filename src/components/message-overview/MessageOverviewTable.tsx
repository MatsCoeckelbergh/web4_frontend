import React, { useState } from 'react';
import { Message } from '../../types';

type Props = {
    messages: Message[];
    setSelectedMessage: (message: Message) => void;
};

const MessageOverviewTable: React.FC<Props> = ({ messages, setSelectedMessage }: Props) => {
    const [nameFilter, setNameFilter] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(-1);

    const emptyMessages = (messages.length==0)
    console.log(messages)
    return (
        <>
            <div className='messages'>
            <div className='login__field'>
                <input
                    type="text"
                    className="login__input"
                    placeholder="Filter by name"
                    onChange={(event) => setNameFilter(event.target.value)}
                />
            </div>
            
            <div className="Container">
                {!emptyMessages && (
                    <table>
                        <thead>
                            <tr>
                                <th>Author</th>
                                <th>
                                    Text
                                </th>
                                <th >
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages &&
                                messages
                                    .filter(({ author }) =>
                                        author.toLowerCase().includes(nameFilter.toLowerCase())
                                    )
                                    .map((message, index) => (
                                        <tr
                                            className={index === currentIndex ? 'table-active' : ''}
                                            onClick={() => {
                                                setSelectedMessage(message);
                                                setCurrentIndex(index);
                                            }}
                                            key={index}
                                            role="button"
                                        >
                                            <td>{message.author}</td>
                                            <td>{message.text}</td>
                                            <td>{new Date(message.date).getDay()}/
                                            {new Date(message.date).getMonth()}/
                                            {new Date(message.date).getFullYear()}</td>
                                            
                                        </tr>
                                    ))}
                        </tbody>
                    </table>
                )}
            
            </div>
            {emptyMessages && (
                    <p>Your friends have been quiet lately…</p>
                )}
                </div>
        </>
    );
};

export default MessageOverviewTable;
