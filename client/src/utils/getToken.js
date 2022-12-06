const getToken = () => (
  {
    headers: {
      Authorization: `JWT ${JSON.parse(localStorage.getItem('applicationState')).user.user.token}`
    }
  } 
)
export default getToken
