import './App.css';
import Home from './pages/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Home />
      <ToastContainer />
    </>
  );
}

export default App;
