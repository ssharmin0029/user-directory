// import logo from './logo.svg';
import './App.css';
// *****
import API from './utils/API';
// *****

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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

// Lifecycle methods 
// Class Component didMount

// Data set to State

// if using function component then use hooks 