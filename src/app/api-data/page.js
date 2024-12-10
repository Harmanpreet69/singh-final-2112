"use client";

import { useEffect, useState } from "react";

const ApiData = () => {
  const [users, setUsers] = useState([]);

  console.log(users);

  useEffect(() => {
    fetch("https://randomuser.me/api?results=10")
      .then((res) => res.json())
      .then((res) => setUsers(res.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1>Api Data</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Gender</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ApiData;
