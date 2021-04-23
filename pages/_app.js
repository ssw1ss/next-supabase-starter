import '../styles/index.css'
import { AuthProvider } from '../utils/UserContext'

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default App