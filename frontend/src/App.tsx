import './App.css';
import { Header } from './components/Header/Header';
import { Layout } from './components/Layout/Layout';
import { UserContextProvider } from './store/user-context';

function App() {
  return (
    <UserContextProvider className="App">
      <Header />
      <Layout />
    </UserContextProvider>
  );
}

export default App;
