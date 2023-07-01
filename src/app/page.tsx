import Link from 'next/link'
import 'tailwindcss/tailwind.css';


export default function Page() {
    return (
        <div className=''>
        <Link href='/login'> 
        <p className='text-xl font-light text-gray-500 dark:text-gray-400'> LOGIN PAGE 
        </p>
        </Link>
        </div>
        
    )
}