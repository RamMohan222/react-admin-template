import { Routes, Route, Navigate } from 'react-router-dom';
import Sales from '../components/sales'
import Users from '../components/users'
import Settings from '../components/settings'
import Dashboard from '../components/dashboard'
import Registrations from '../components/registrations'
import CreateSales from '../components/sales/create'
import { CallbackHandler, Secured } from '../components/login';
export default function Router() {
    return (
        <Routes>
            <Route path='/'>
                <Route index element={<CallbackHandler><Navigate to='/sales' /></CallbackHandler>} />
                <Route path="/sales" element={<Secured><Sales /></Secured>} />
                <Route path="/users" element={<Secured><Users /></Secured>} />
                <Route path="/settings" element={<Secured><Settings /></Secured>} />
                <Route path="/dashboard" element={<Secured><Dashboard /></Secured>} />
                <Route path="/registrations" element={<Secured><Registrations /></Secured>} />
                <Route path="/create-new-sale" element={<Secured><CreateSales /></Secured>} />
            </Route>
        </Routes>)
}