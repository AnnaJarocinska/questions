import React from 'react';

const UsersList = (
  { users, deleteUser }
  ) => {

  return (
    <ul>
      {
        users &&
          users.length > 0 ?
          (
            users.map(user => {
              return (
                <li key={user._id} onClick={() => deleteUser(user._id)}>
                {user.name}
                {user.password}
                {user.created}
                </li>
              )
            })
          )
          :
          (
            <li>No users</li>
          )
      }
    </ul>
  )
}

export default UsersList;


