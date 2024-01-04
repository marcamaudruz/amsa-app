import { fetchCards, seed } from '../lib/data'

export default async function DashboardPage() {
  const data = await fetchCards()
  //await seed()
  return (
   <>
      <p>Coût total des notes de frais: {data.totalPrix}</p>
      <p>nombre d'utilisateurs: {data.nombreUsers}</p>
   </>
  )
}
