import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/bappabarik')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

    return (
        <>
        <div className="flex items-center rounded-full justify-center p-4"><img 
        className='rounded-full h-28'
        src={data.avatar_url} alt="Github Profile Picture" />
        </div>
        <div className='text-center p-4 bg-gray-600 text-white text-3xl'>
            GitHub Followers: {data.followers}
        </div>
        </>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/bappabarik')

    return response.json()
}
