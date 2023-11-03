"use client"
import React from 'react';
import Link from "next/link";
import {lusitana} from "@/app/ui/fonts";
import Image from "next/image";
import {usePathname} from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
    const pathname = usePathname()
    return (
        <>
            <div className={clsx(`${lusitana.className} mx-auto h-full bg-gray-800 text-zinc-200 flex flex-col`, {
                'bg-sky-100 text-blue-600': pathname === '/dashboard'
            })}>
                <Image className={'block xxl:hidden p-4'} src={"/vercel.svg"} alt={"test"} width={100} height={20}/>
                <Link className={'p-4 hover:bg-cyan-700'} href={'/'}>HOME</Link>
                <Link className={'p-4 hover:bg-cyan-700'} href={'/test1'}>TEST1</Link>
                <Link className={'p-4 hover:bg-cyan-700'} href={'/dashboard'}>DASHBOARD</Link>
                <Link className={'p-4 hover:bg-cyan-700'} href={'/posts'}>USERS</Link>
            </div>
        </>
    )
}
