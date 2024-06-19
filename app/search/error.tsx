'use client'
import React, { useEffect } from 'react';

interface Props {
    error: string;
    reset: () => void;
}

const Error = ({ error, reset }: Props) => {
    useEffect(() => {
        console.log('error', error);
    }, [error]);

    return (
        <div className='flex flex-col justify-center items-center pt-10'>
            <h1>Error</h1>
            <button onClick={reset} className='text-blue-500'>Try again</button>
        </div>
    );
};

export default Error;
