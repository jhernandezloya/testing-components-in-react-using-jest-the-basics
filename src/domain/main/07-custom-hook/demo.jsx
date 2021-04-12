import React from "react";
import useUserCollection from './useUserCollection';


export const MyComponent = () => {
  const { userCollection, loadUsers, filter, setFilter } = useUserCollection();

  React.useEffect(() => {
    loadUsers();
  }, [filter]);

  return (
    <div>
      <input value={filter} onChange={e => setFilter(e.target.value)} />
      <ul>
        {userCollection.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};