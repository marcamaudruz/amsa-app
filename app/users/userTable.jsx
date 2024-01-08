import Link from 'next/link';

export default async function UserTable({users}) {
  return (
    <div
      className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Utilisateur
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Email
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Centre
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (

              <tr key={user.id}>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {user.username}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    Developer
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    24/12/08
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Link href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                    Edit
                  </Link>
                </td>
              </tr>
          ))}

          <tr>
            <td className="p-4">
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                Richard Gran
              </p>
            </td>
            <td className="p-4">
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                Manager
              </p>
            </td>
            <td className="p-4">
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                04/10/21
              </p>
            </td>
            <td className="p-4">
              <Link href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                Edit
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
