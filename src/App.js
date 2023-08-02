import { Routes, Route } from 'react-router-dom';
import Router from './router/index';

import Login from './views/login/index';
import Layout from './views/layout/index';
import Dashboard from './views/dashboard/index';
import Table from './views/table/index';
import Chart from './views/chart/index';

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
