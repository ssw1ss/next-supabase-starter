import { useAuth } from "../utils/UserContext"

const PrivateContent = ({ children }) => {
  let { user, loading } = useAuth()
  if (loading) {
    return <h1>Loading...</h1>
  }
  if (!user) {
    return <h1>gtfo</h1>
  }
  return children
}

export default PrivateContent