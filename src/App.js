import './App.css';
import PersonCard from './components/personcard';
import PersonCardFunc from './components/personcardfunc';

function App() {
  return (
    <div className="App">
      <PersonCardFunc firstName = 'Jane' lastName = 'Doe' age = {45} hairColor = 'Black'/>
      <PersonCardFunc firstName = 'John' lastName = 'Smith' age = {88} hairColor = 'Brown'/>
      <PersonCardFunc firstName = 'Millard' lastName = 'Fillmore' age = {50} hairColor = 'Brown'/>
      <PersonCardFunc firstName = 'Maria' lastName = 'Smith' age = {62} hairColor = 'Brown'/>
    </div>
  );
}

export default App;
