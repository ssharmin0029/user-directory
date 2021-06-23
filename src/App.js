import './App.css';
import API from './utils/API';

function App() {

  const users = () => {
    API.search()
      .then(res => {
        console.log(res)})
      .catch(err => console.log(err));
  };


  return (
    <div className="App">
      <button onClick={users}></button>
    </div>
  );
}

export default App;