"use client";
import React, {useEffect} from 'react';
import {AdminStoreType, useAdminStore} from "@/app/hooks/useAdminStore";
import {useStore} from "@/app/hooks/useStore";

const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return await res.json()
}

const Comment = () => {
    const { isAdmin } : AdminStoreType = useAdminStore()
    const { users, setUsers } = useStore();

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            console.log(res)
            return await res.json()
        }

        console.log(getData())
    }, []);

    return <div>{users ? users.id : null}</div>
}

export default Comment;