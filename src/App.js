import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import SecretArea from './components/SecretArea';
import {useState} from 'react'

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={!auth ? <Form setAuth={setAuth} /> : <Navigate to='/secret' />}/>
          <Route path='/secret' element={auth ? <SecretArea /> : <Navigate to='/'/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
