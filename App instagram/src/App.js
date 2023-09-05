import React, { useState } from 'react';
import instafoto from './img/instafoto.png';
import face from './img/face.png';
import './App.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Nome de Usuário:', username);
    console.log('Senha:', password);
  };

  return (
    <div className="login-container">
      <div className="img-left">
        <img src={instafoto} alt="Instagram tela" />
      </div>
      <div className="login-right">
        <div className="login-form">
          <h1>Instagram</h1>
          <input
            type="text"
            placeholder="Telefone, nome de usuário ou email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Entrar</button>
          <div className="line-flat">
            <hr className="line" />
            <p> ou</p>
            <hr className="line" />
          </div>
          <div className="facebook-wrapper">
            <img src={face} alt="facebook" style={{ width: '30px', height: '30px' }}/>
            <p> Iniciar sessão com o Facebook</p>     
          </div>
        </div>
        <div className="forget-login">
          <a href="#">Esqueceu a senha?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
