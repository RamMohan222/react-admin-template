import { AuthProvider } from './components/login';
import Menu from './framework/Menu'
import Router from './framework/Router'

export default function App(props) {
  return (
    <AuthProvider>
      <Menu />
      <Router />
    </AuthProvider>
  );
}