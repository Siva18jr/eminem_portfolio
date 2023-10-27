import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav';
import Body from './components/body';
import End from './components/footer';

function App() {
  return (
    <main>
      <NavBar />
      <Body />
      <End />
    </main>
  );
}

export default App;