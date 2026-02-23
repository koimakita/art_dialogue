import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// もし import './index.css' という行があったら削除してください。
// このファイルはこれだけでOKです。

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)