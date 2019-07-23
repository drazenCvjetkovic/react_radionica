import React from 'react';
import './App.css';
import {MyForm} from './MyForm';

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center'}}><MyForm onSubmit={({firstName,lastName,email}) => {
      console.log(firstName, lastName ,email)
    }}/></div>
  );
};

export default App;
