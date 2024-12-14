import { useState } from 'react'
import './App.css'
import React from 'react';
import CameraComponent from './camera/cmra.jsx';

const App = () => {
  return (
    <div>
      <h1>Bem-vindo à Aplicação</h1>
      <CameraComponent />
    </div>
  );
};

export default App;
