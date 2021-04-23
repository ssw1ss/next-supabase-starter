import { useState, useEffect, useContext, createContext } from 'react'
import { supabase } from '../utils/initSupabase'

const AuthContext = createContext()

const useAuthProvider = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (supabase.auth.user()) {
      setUser(supabase.auth.user())
    }
    setLoading(false)
    let unsubscribe = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session)
      if (event === "SIGNED_IN") {
        setUser(supabase.auth.user())
      }
      if (event === "SIGNED_OUT") {
        setUser(null)
      }
    })

    return unsubscribe
  }, [])
  
  return {
    user,
    loading,
  }
}

export function AuthProvider({ children }) {
  const auth = useAuthProvider()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}