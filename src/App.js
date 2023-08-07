import { Routes, Route } from 'react-router-dom';

import Login from 'pages/login/index';
import Layout from 'pages/layout/index';
import Dashboard from 'pages/dashboard/index';
import Table from 'pages/table/index';
import Chart from 'pages/chart/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/chart" element={<Chart></Chart>}></Route>
          <Route path="/table" element={<Table></Table>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
