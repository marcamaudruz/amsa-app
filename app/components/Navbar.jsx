import Link from 'next/link'
import Image from 'next/image'
import Logo from './logo.png'

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Logo de l'entreprise"
        width={70}
        quality={100}
      />

      <h1>amsa-app</h1>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/tickets">Frais</Link>
      <Link href="/users">Users</Link>
    </nav>
  )
}