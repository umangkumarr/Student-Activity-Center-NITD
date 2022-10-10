import { Route, Routes } from 'react-router-dom';
import { Home } from './component'
import Login from './Login/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Home />
      </Routes>
    </>
  );
}

export default App;
