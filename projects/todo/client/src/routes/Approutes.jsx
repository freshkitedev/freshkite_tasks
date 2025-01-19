import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SignIn from '../pages/Signin'
import SignUp from '../pages/Signup'
import { ErrorProvider } from '../contexts/Errorcontext'
import { useAuth } from '../contexts/Authcontext'
import Tasklist from '../pages/Tasklist'
import LandingPage from '../components/Landingpage'

const Approutes = () => {
    const { user } = useAuth();

    return (
        <div>
            <Navbar />
            <ErrorProvider>
                <Routes>
                    <Route path="/login" element={!user ? <SignIn /> : <Navigate to="/tasks"/>} />
                    <Route path="/register" element={!user ? <SignUp /> : <Navigate to="/tasks"/>} />
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/tasks" element={<Tasklist />} />
                </Routes>
            </ErrorProvider>
        </div>
    )
}

export default Approutes