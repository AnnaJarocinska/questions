import React from 'react';
import Paragraph from '../styles/Paragraph';
import Subtitle from '../styles/Subtitle';
import ListItem from '../styles/ListItem';
import Container from '../styles/Container';

const UsersList = ({ users, deleteUser }) => {
 
  return (
    <Container users>
      <ul>
      <Subtitle>Users</Subtitle>
        {
          users &&
            users.length > 0 ?
            (
              users.map(user => {
                const formattedDate = user.created.substr(0,10).replaceAll("-", ".");
                return (
                    <ListItem key={user._id} onClick={() => deleteUser(user._id)}>
                      <Paragraph key={user.name}>Login: {user.name}</Paragraph>
                      <Paragraph key={user.created}>Created: {formattedDate}</Paragraph>
                    </ListItem>
                )
              })
            )
            :
            (<ListItem>No users</ListItem>)
        }
      </ul>
  </Container>
  )
}

export default UsersList;


