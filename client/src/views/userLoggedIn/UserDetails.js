import React from 'react';
import { connect } from 'react-redux';
import Container from '../../styles/Container';
import Paragraph from '../../styles/Paragraph';

const UserDetails = ({userName, created}) => {
    return (
        <Container separate user> 
            <Paragraph>
                You are logged in as {userName}
            </Paragraph>
            <Paragraph>
                Registered: {created}
            </Paragraph>
            <Paragraph>
                Change password
            </Paragraph>
            <Paragraph>
                Add photo
            </Paragraph>
        </Container>
     );
}
 
const mapStateToProps = (state) => ({
userName: state.view.userName,
created: state.view.created
})

export default connect(mapStateToProps, null) (UserDetails);