import { Header } from './components/Header';
import Modal from './components/Modal';
import { Home } from './pages/Home';
import './styles/main.css';

function App() {
  return (
    <div className="">
      <Header />

      <Home />
      <Modal />
    </div>
  );
}

export default App;
