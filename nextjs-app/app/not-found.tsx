import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

export default function NotFound() {
  return (
    <div className={twMerge('h-dvh w-full flex flex-col items-center justify-center', 'sm:text-lg md:text-xl lg:text-2xl text-gray-700')}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='hover:opacity-50'>Return Home</Link>
    </div>
  )
}