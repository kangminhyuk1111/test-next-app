import React from 'react';

interface User {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const UsersPage = async () => {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts',{cache:'no-store'})
    const users: User[] =  await res.json()

    return (
        <>
            <h1>Users</h1>
            <ul>
                {users ? users.map((user:any,idx:number) => (<li key={idx}>{user.title}</li>)) : null}
            </ul>
        </>

    )
}

export default UsersPage