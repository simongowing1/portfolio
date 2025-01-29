import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='h-dvh w-full flex flex-col items-center justify-center'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='hover:opacity-50'>Return Home</Link>
    </div>
  )
}