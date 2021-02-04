// import actions from './actions'
// import Cookies from 'js-cookie';
// import axios from 'axios';

//   const cookieKey = Cookies.get('key');
//   const keyyContent = {
//     key: cookieKey,
//         }

// const fetchUserName = async () => {
//   const response = await axios.post('http://localhost:5000/users', keyyContent)
//   const json = await response.json()

//   return json
// }

// export const getUserName = () =>
//   async (dispatch) => {
//     const userName = await fetchUserName()
//     dispatch(actions.addUserName(
//     userName.name))
//   }