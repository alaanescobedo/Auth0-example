import logo from './logo.svg';
import './App.css';
import LoginButton from './Login';
import LogoutButton from './Logout';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Profile/>
        <LoginButton/>
        <LogoutButton/>
      </header>
    </div>
  );
}

export default App;
