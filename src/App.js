import React from 'react';
import EmployeeContainer from './components/EmployeeContainer';
// import API from './utils/API';

function App() {

  // const users = () => {
  //   API.getUsers()
  //     .then(res => {
  //       console.log(res)})
  //     .catch(err => console.log(err));
  // };

  return (
    // <div className="App">
    //   <button onClick={users}></button>
    // </div>
    <EmployeeContainer />
  );
}

export default App;