import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Employee from "./pages/Employee";
import Department from "./pages/Department";
import Salary from "./pages/Salary";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/employee" element={<Employee />} />

        <Route path="/department" element={<Department />} />

        <Route path="/salary" element={<Salary />} />

        <Route path="/reports" element={<Reports />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;