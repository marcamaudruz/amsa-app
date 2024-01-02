import Link from "next/link"

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">Nous avons rencontré un problème.</h2>
      <p>La page n'a pas pu être trouvée.</p>
      <p>retour à <Link href="/">l'accueil</Link>.</p>
    </main>
  )
}