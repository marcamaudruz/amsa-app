import { fetchUsers } from '../lib/data'
import UserTable from './userTable'

export default async function UsersPage() {

  const { users } = await await fetchUsers() //pourquoi retourne pas un array ??

  return (
    <main>
      <nav>
        <div>
          <h2>Utilisateurs</h2>
        </div>
      </nav>
      
      {users.lenght === 0 && (
        <p>no users</p>
      )}

        <UserTable users={users} />

    </main>
  )
}
