import React from 'react';

import './App.css';
import Body from './components/Body';
import { UserProvider } from './utils/UserContext';

function App() {
  return (
    <UserProvider>
      <Body />
    </UserProvider>
  );
}

export default App;
