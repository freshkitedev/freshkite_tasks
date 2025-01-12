import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import SignIn from '../pages/Signin'
import SignUp from '../pages/Signup'
import { ErrorProvider } from '../contexts/Errorcontext'
import { useAuth } from '../contexts/Authcontext'

const Approutes = () => {
    const { user } = useAuth();

    return (
        <div>
            <Navbar />
            <ErrorProvider>
                <Routes>
                    <Route path="/login" element={!user ? <SignIn /> : <Navigate to="/tasks"/>} />
                    <Route path="/register" element={!user ? <SignUp /> : <Navigate to="/tasks"/>} />
                    <Route path="/" element={<Layout />} />
                    <Route path="/tasks" element={<Layout />} />
                </Routes>
            </ErrorProvider>
        </div>
    )
}

export default Approutes