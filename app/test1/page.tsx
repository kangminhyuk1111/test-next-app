import React, {Suspense} from 'react';
import Loading from "@/app/test1/loading";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

async function getUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return data
}

async function UserList() {
    const data = await getUser()
    return (
        <>
            {data ? data.map((post: User, idx: number) => (
                <li className={'w-2/3 flex flex-row w-100'} key={idx}>
                    <span className={'w-1/3'}>{post.name}</span>
                    <span className={'w-1/3 pl-4'}>{post.username}</span>
                    <span className={'w-1/3 pl-4'}>{post.email}</span>
                </li>
            )) : <Loading/>}
        </>
    )
}

export default async function Test1() {
    return (
        <div className={'p-6'}>
            <p className={"text-3xl"}>POSTS</p>
            <ul className={"list-none pl-6 mt-4 space-y-2"}>
                <Suspense fallback={<Loading/>}>
                    <UserList />
                </Suspense>
            </ul>
        </div>
    );
}
