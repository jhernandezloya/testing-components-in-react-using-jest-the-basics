import React from "react";

export const useUserCollection = () => {
  const [filter, setFilter] = React.useState("");
  const [userCollection, setUserCollection] = React.useState([]);

  const loadUsers = () => {
    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
      .then(response => response.json())
      .then(json => setUserCollection(json));
  };

  return { userCollection, loadUsers, filter, setFilter };
};