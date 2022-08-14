export interface Message {
    id: number;
    author: string;
    text: string;
    date: Date;
}
export interface Student {
    id: number;
    name: string;
    status: string
}

export interface Response {
    status: 'error' | 'success';
    lecturerId?: number;
    errorMessage?: string;
}

export interface StatusMessage {
    message: string;
    type: 'error' | 'success';
}
