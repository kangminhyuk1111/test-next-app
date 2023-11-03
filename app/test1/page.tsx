import React, {Suspense} from 'react';
import Loading from "@/app/components/loading";
import Card from "@/app/components/card";

export interface User {
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

async function getUser(): Promise<any> {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return data
}

async function UserList(): Promise<React.JSX.Element> {
    const data = await getUser()
    return (
        <>
            {data ? data.map((post: User, idx: number) => (
                <Card key={idx}
                 item={post}
                />
            )) : <Loading/>}
        </>
    )
}

export default async function Test1(): Promise<React.JSX.Element> {
    return (
        <div className={'flex flex-col min-h-fit p-6 overflow-hidden'}>
            <p className={"text-3xl"}>Users</p>
            <div className={'flex flex-row flex-wrap'}>
                <Suspense fallback={<Loading/>}>
                    <UserList/>
                </Suspense>
            </div>
        </div>
    );
}
