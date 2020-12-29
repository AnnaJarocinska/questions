import React from 'react';
import { connect } from 'react-redux';
import actions from '../view/duck/actions';
import MainImage from '../components/MainImage';

const Home = ({match, home, isHomepage}) => {
  let trr = match.path
  console.log(trr, 'trr')
  
    return (
      <MainImage/>
      );
}
 
const mapStateToProps = (state) => ({
  home: state.view.home
})

const mapDispatchToProps = (dispatch) => ({
  isHomepage: () =>  dispatch(actions.isHomepage())
})  

export default connect(mapStateToProps, mapDispatchToProps) (Home);