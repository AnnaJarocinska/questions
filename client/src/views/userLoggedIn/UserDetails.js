import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
            <Link to="/user/details/changePassword">
                <Paragraph>
                    Change password
                </Paragraph>
            </Link>
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