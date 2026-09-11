import { useEffect, useState } from "react";
import { getUsers } from "../api/client.js";
function listUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadUsers();
  }, []);
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Lista de usuários cadastrados.</h1>
      {users.map((user) => (
        <p className="border rounded p-3 mb-2" key={user.id}>
          {user.username}
        </p>
      ))}
    </div>
  );
}
export default listUsers;
