import axios from 'axios'
import React from "react";
import Loading from "@/app/components/loading";

interface Post {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function fetchUserData (){
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(res.data)
    return res.data
}
export default async function Posts() {
    const data = await fetchUserData()
    return (
        <div className={'w-full flex flex-row flex-wrap'}>
            {data ? data.slice(0,4).map((item:Post,idx:number) => (
                <div className={'w-1/4 m-2 bg-amber-300 p-2'}>
                    <p>{item.title}</p>
                    <p>{item.id}</p>
                    <p>{item.userId}</p>
                    <p>{item.completed}</p>
                </div>
            )) : null}
        </div>
    )
}