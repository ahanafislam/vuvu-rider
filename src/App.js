import './App.css';
import Answer from './components/Answer/Answer';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Answer></Answer>
    </div>
  );
}

export default App;
