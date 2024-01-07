import { fetchCards, seed } from '../lib/data'
import { Card, CardBody } from "@nextui-org/react";

export default async function DashboardPage() {
  const data = await fetchCards()

  //await seed() //use to repopulate DB

  return (
    <main>
      <nav>
        <div>
          <h2>Dashboard</h2>
        </div>
      </nav>
      <p>Coût total des notes de frais: {data.totalPrix}</p>
      <p>nombre d'utilisateurs: {data.nombreUsers}</p>
      <div className="grid place-items-center">
        <Card>
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
        </Card>
      </div>
    </main>
  )
}
