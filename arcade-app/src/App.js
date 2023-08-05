import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import NavBar from './components/navBar';
import TicTacToe from './components/ticTacToe';
import Home from './components/home';


function App() {
  let selectedProgram = "Home";
  return (
    <div>
      <Header />
      <NavBar />
    </div>
  );
}

export default App;


