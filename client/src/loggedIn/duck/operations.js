/* eslint-disable */
import actions from './actions'


const fetchUserName = async () => {
  const response = await fetch('http://localhost:5000/users', { method: 'POST' })
  const json = await response.json()

  return json
}

export const getUserName = () =>
  async (dispatch) => {
    const userName = await fetchUserName()
    dispatch(actions.addUserName(
    userName.name))
  }