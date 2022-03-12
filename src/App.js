import { useState } from 'react';
import './App.css';
import UserInf from './Components/UserInfo';

function App() {
  const [name, setName] = useState('')
  return (
    <div className="App">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      <UserInf userName={name}></UserInf>
    </div>
  );
}

export default App;
