import Link from 'next/link'
import Image from 'next/image'
import Logo from './logo.png'

export default function Navbar() {
  return (
    <div className={"container mx-auto flex items-center border-b-2 px-6 py-2 h-24"}>
      {/* <Image
        src={Logo}
        alt="Logo de l'entreprise"
        width={70}
        quality={100}
      /> */}
      <h1 className="grow">amsa-app</h1>
      <div className='grow'>
        <div className='flex items-center justify-center gap-2 md:gap-8'>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/tickets">Frais</Link>
          <Link href="/users">Users</Link>
        </div>  
      </div>
      <div>
        <Link href="/" className='mr-2 font-bold'>Sign up</Link>
        <Link href="/" className='font-bold'>Login</Link>
      </div>
      
    </div>
  )
}