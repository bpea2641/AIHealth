import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const checkConnection = async () => {
    try {
      const response = await axios.get('/api/test');
      setMessage(response.data);
    } catch (error) {
      setMessage('연결 실패: ' + (error.response ? error.response.data : error.message));
    }
  };

  return (
    <div className="App">
      <p>리액트 연동 확인.</p>
      <button onClick={checkConnection}>Spring Boot 연결 확인</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
