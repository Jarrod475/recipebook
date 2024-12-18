import './App.css';
import Header from "./components/Header";
import Login from "./components/login";
import List from './components/list';

function App() {
  return (
    <div className="App">
      <Header />
      <List />
      {/* <Login /> */}
    </div>
  );
}

export default App;
