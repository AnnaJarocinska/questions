import React from 'react';
import { connect } from 'react-redux';
import actions from '../view/duck/actions';
import MainImage from '../components/MainImage';
import NavBar from '../components/NavBar';

const Home = ({home, isHomepage}) => {
    return (
      <>
      <NavBar home/>
      <MainImage/>
      </>
        
      );
}
 
const mapStateToProps = (state) => ({
  home: state.view.home
})

const mapDispatchToProps = (dispatch) => ({
  isHomepage: () =>  dispatch(actions.isHomepage())
})  

export default connect(mapStateToProps, mapDispatchToProps) (Home);