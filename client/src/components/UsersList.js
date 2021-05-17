import React from 'react';
import Paragraph from '../styles/Paragraph';
import Subtitle from '../styles/Subtitle';
import ListItem from '../styles/ListItem';

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
                    <ListItem key={user._id} onClick={() => deleteUser(user._id)}>
                      <Paragraph key={user.name}>Login: {user.name}</Paragraph>
                      <Paragraph key={user.password}>Password: {user.password}</Paragraph>
                      < Paragraph key={user.created}>Created: {user.created}</Paragraph>
                    </ListItem>
                )
              })
            )
            :
            (
              <ListItem>No users</ListItem>
            )
        }
      </ul>
    </>
  )
}

export default UsersList;


