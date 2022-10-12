import { Home } from './component'
import ProtectedRoute from './Login/ProtectedRoute';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
       <ToastContainer />
       <Routes > 
          <Route path = '/' element = { < Home />}/>
          <Route path = '/admin' element = { < ProtectedRoute /> }/>
       </Routes>

    </>
     
  );
}

export default App;
