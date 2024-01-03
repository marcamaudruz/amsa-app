import { fetchCards } from '../lib/data'

export default async function DashboardPage() {

  const data = await fetchCards()
  console.log(data.nombreUsers)
  console.log(data.totalPrix)
  
  return (
   <>
      <p>Coût total des notes de frais: {data.totalPrix}</p>
      <p>nombre d'utilisateurs: {data.nombreUsers}</p>
   </>
  )
}
