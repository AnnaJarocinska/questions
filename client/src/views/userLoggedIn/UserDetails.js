import React from 'react';
import { connect } from 'react-redux';
import Container from '../../styles/Container';
import Paragraph from '../../styles/Paragraph';

const UserDetails = ({userName}) => {
    return (
        <Container separate> 
            <Paragraph>
                You are logged in as {userName}
            </Paragraph>
        </Container>
     );
}
 
const mapStateToProps = (state) => ({
userName: state.loggedIn.userName
})

export default connect(mapStateToProps, null) (UserDetails);