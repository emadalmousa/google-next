import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

interface Props {
  searchParams: {
    searchTerm: string;
  };
}

const page = async ({ searchParams }: Props) => {
  const res = await fetch(` https://www.googleapis.com/customsearch/v1?key=${process.env.
    API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`);
  if (!res.ok) {
    throw new Error('Somthing is wrong');
  }
  const data = await res.json();
  const results = data.items;
  if (!results) {
    return (
      <div className='flex flex-col justify-center items-center pt-10'>
        <h1>No data find</h1>
        <p className='text-lg'>Try somthing else</p>
        <Link href='/' className='text-blue-500'>Home</Link>
      </div>
    )

  }
  return (
    <div className='text-red-500'>
      {results && results.map((result: any) => (
        <h1>{result.title}</h1>
      ))}
    </div>
  )
}

export default page