// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { TodoList } from '../../types/todo';

const DUMMY_DATA: TodoList = [
    {
        id: '1',
        title: 'Go shopping',
        done: false,
    },
    {
        id: '2',
        title: 'Job interview',
        done: false,
    },
    {
        id: '3',
        title: 'Prepare homework',
        done: false,
    },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<TodoList>) {
    res.status(200).json(DUMMY_DATA);
}
