import { fetchUsers } from '../lib/data'

export default async function UsersPage() {

  const {users} = await await fetchUsers() //pourquoi retourne pas un array ??

  return (
   <main>
      <nav>
        <div>
          <h2>Utilisateurs</h2>
        </div>
      </nav>
      {users?.map((user) => (
        <div key={user.id}>
          <p>{user.username + user.id}</p>
        </div>        
      ))}
      {users.lenght === 0 && (
        <p>no users</p>
      )}
   </main>
  )
}
