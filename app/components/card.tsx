import React from 'react';
import Image from "next/image";
import {User} from "@/app/test1/page";
import AddButton from "@/app/components/Button";

interface IProps {
    item: User
}

const CardComponent: React.FC<IProps> = ({item}) => {
    return (
        <div
            className="m-4 max-w-sm bg-white border min-w-fit border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <Image className="rounded-t-lg m-5 mb-0" src={"/vercel.svg"} alt={"test"} width={100} height={50}/>
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.email}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.phone}</p>
                <a href="#"
                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <AddButton />
            </div>
        </div>
    );
}

export default CardComponent