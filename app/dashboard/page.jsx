import { fetchCards, seed } from '../lib/data'

export default async function DashboardPage() {
  const data = await fetchCards()
  //await seed()
  return (
   <main>
      <nav>
        <div>
          <h2>Dashboard</h2>
        </div>
      </nav>
      <p>Coût total des notes de frais: {data.totalPrix}</p>
      <p>nombre d'utilisateurs: {data.nombreUsers}</p>
   </main>
  )
}
