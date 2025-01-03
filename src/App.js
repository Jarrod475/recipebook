import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import Header from "./components/Header";
import List from './components/list';
import LoginPage from './components/Loginpage';

function App() {








  return (
    <div className="App">
      <GoogleOAuthProvider clientId="1022244509768-97geajdtudjrotncr2urjmrdeuuqkmkv.apps.googleusercontent.com">
      <Header />
      <LoginPage />
      {/*<List />*/}
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
