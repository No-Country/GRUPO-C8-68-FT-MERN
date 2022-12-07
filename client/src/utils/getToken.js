const getToken = () => {
  const token = JSON.parse(localStorage?.getItem('applicationState'))?.user
    ?.user?.token
  if (token)
    return {
      token,
    }
  else return null
}
//   {
//     headers: {
//       Authorization: `JWT ${JSON.parse(localStorage.getItem('applicationState')).user.user.token}`
//     }
//   }
// )
export default getToken
