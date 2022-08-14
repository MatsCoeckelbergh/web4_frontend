import React, { useState } from 'react';
import { Student } from '../../types';

type Props = {
    students: Student[];
    setSelectedStudents: (student: Student) => void;
};

const StudentOverviewTable: React.FC<Props> = ({ students, setSelectedStudents }: Props) => {
    const [nameFilter, setNameFilter] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(-1);

    const emptyStudents = (students.length==0)
    console.log(students)
    return (
       
        <>
            <div>
                {!emptyStudents && (
                    <table className='tableFriends'>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students &&
                                students
                                    .filter(({ name }) =>
                                        name.toLowerCase().includes(nameFilter.toLowerCase())
                                    )
                                    .map((student, index) => (
                                        <tr
                                            className={index === currentIndex ? 'table-active' : ''}
                                            onClick={() => {
                                                setSelectedStudents(student);
                                                setCurrentIndex(index);
                                            }}
                                            key={index}
                                            role="button"
                                        >
                                            <td>{student.name}</td>
                                            <td>{student.status}</td>
                                            
                                        </tr>
                                    ))}
                        </tbody>
                    </table>
                )}
            
            </div>
            {emptyStudents && (
                    <p>You have no friends, loser</p>
                )}
        </>
    );
};

export default StudentOverviewTable;
