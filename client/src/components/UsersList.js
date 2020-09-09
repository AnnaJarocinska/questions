import React from 'react';
import UsersContainer from '../styles/UsersContainer';
import Subtitle from '../styles/Subtitle';

const UsersList = ({ users, deleteUser }) => {

  return (
    <>
      <Subtitle>Users</Subtitle>
      <ul>
        {
          users &&
            users.length > 0 ?
            (
              users.map(user => {
                return (
                  <UsersContainer>
                    <li key={user._id} onClick={() => deleteUser(user._id)}>
                      <p>Login: {user.name}</p>
                      <p>Password: {user.password}</p>
                      <p>Created: {user.created}</p>
                    </li>
                  </UsersContainer>
                )
              })
            )
            :
            (
              <UsersContainer>
              <li>No users</li>
              </UsersContainer>
            )
        }
      </ul>
    </>
  )
}

export default UsersList;


