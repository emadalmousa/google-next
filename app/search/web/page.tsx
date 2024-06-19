import WebSearchResults from '@/app/components/WebSearchResults';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'


const page = async ({ searchParams }: any) => {
  const startIndex = searchParams.start || '1';
  const res = await fetch(` https://www.googleapis.com/customsearch/v1?key=${process.env.
    API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start${startIndex}`);
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
    <div >
      {<WebSearchResults results={data} />}
    </div>
  )
}

export default page