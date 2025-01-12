import { BrowserRouter } from 'react-router-dom'
import Approutes from './routes/Approutes'
import { AuthProvider } from './contexts/Authcontext'
import { ThemeProvider } from './contexts/Themecontext'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider>
            <Toaster position='top-right' />
            <Approutes />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
