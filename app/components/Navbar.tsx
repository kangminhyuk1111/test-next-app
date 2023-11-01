"use client"
import React from 'react';
import Link from "next/link";
export default function Navbar() {
    return (
        <>
            <div className={'mx-auto h-auto bg-amber-600 flex flex-row'}>
                <Link className={'p-4'} href={'/'}>HOME</Link>
                <Link className={'p-4 ml-2'} href={'/test1'}>TEST1</Link>
                <Link className={'p-4 ml-2'} href={'/test2'}>TEST2</Link>
            </div>
        </>
    )
}
