import { useEffect } from 'react'

import { supabase } from '../utils/initSupabase'
import Link from './Link'
import { useAuth } from "../utils/UserContext"

const LogoutButton = () => {
  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) console.log("error signing out")
  }
  return <button onClick={signOut}>Logout</button>
}

const AuthNav = props => {
  return (
    <div {...props}>
      <Link href="/admin">Admin</Link>
      <LogoutButton />
    </div>
  )
}
const UnAuthNav = props => {
  return (
    <div {...props}>
      <Link className="button mr-2" href="/login">Login</Link>
      <Link className="button" href="/register">Register</Link>
    </div>
  )
}

const Layout = ({ children }) => {
  let { user } = useAuth()
  let Nav = user
    ? AuthNav
    : UnAuthNav
  return (
    <div>
      <header className="py-3 border-b border-gray-300">
        <div className="container flex justify-between align-center">
          <Link href="/">
            <h1 className="text-lg font-semibold">Whens Melee</h1>
          </Link>
          <Nav />
        </div>
      </header>
      {children}
    </div>
  )
}

export default Layout