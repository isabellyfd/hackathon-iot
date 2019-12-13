import React from 'react';
import DashboardNavbar from './components/DashboardNavbar';
import Tab from './components/Tab'

function App() {
  return (
    <div className="App">
      <DashboardNavbar />
      <h3 className="main-header">My sensors</h3>
      <Tab />
    </div>
  );
}

export default App;
