import { Routes, Route, createBrowserRouter } from 'react-router-dom';
import Sales from '../components/sales'
import Users from '../components/users'
import Settings from '../components/settings'
import Dashboard from '../components/dashboard'
import Registrations from '../components/registrations'
import CreateSales from '../components/sales/create'
import Menu from './Menu'

export default function Router() {
    return (
        <Routes>
            <Route path="/sales" element={<Sales />}  />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/registrations" element={<Registrations />} />
            <Route path="/create-new-sale" element={<CreateSales />} />
        </Routes>)
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Menu />,
        children: [
            {
                path: "sales",
                element: <Sales />,
            },
            {
                path: "users",
                element: <Users />,
            },
            {
                path: "settings",
                element: <Settings />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },

            {
                path: "registrations",
                element: <Users />,
            },
            {
                path: "create-new-sale",
                element: <CreateSales />,
            },
        ],
    },
]);