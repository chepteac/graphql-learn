import {Outlet} from 'react-router';
import Header from './components/Header';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
