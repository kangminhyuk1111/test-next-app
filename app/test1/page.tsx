import React from 'react';

async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = res.json()
    return data
}

export default async function Test1() {
    const data = await getServerSideProps()
    return (
        <div className={'p-6'}>
            <h1>hello test1 component</h1>
            <ul className={'list-decimal'}>
                {data.map((item:any) => (
                    <li key={item.id}>{item.name}</li> // 각 항목의 id를 key로 사용하여 경고를 방지합니다.
                ))}
            </ul>
        </div>
    );
}
