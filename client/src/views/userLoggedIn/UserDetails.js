import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from '../../styles/Container';
import Paragraph from '../../styles/Paragraph';

const UserDetails = ({userName, created}) => {
    const formattedDate = created.substr(0,10).replaceAll("-", ".");
    return (
        <Container separate user> 
            <Paragraph>
                You are logged in as {userName}
            </Paragraph>
            <Paragraph>
                Registered: {formattedDate}
            </Paragraph>
            <Link to="/user/details/changePassword">
                <Paragraph clickable>
                    Change password
                </Paragraph>
            </Link>
            <Paragraph clickable>
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