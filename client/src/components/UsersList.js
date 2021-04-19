import React from 'react';
import Container from '../styles/Container';
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
                  <Container users>
                    <li key={user._id} onClick={() => deleteUser(user._id)}>
                      <p key={user.name}>Login: {user.name}</p>
                      <p key={user.password}>Password: {user.password}</p>
                      <p key={user.created}>Created: {user.created}</p>
                    </li>
                  </Container>
                )
              })
            )
            :
            (
              <Container users>
              <li>No users</li>
              </Container>
            )
        }
      </ul>
    </>
  )
}

export default UsersList;


