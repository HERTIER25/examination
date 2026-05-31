# EPMS Frontend Revision Guide

## Project Structure

```text
src
│
├── components
│   └── Navbar.jsx
│
├── pages
│   ├── Login.jsx
│   ├── Employee.jsx
│   ├── Department.jsx
│   ├── Salary.jsx
│   └── Reports.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Step 1: Create React Project

Create the frontend project:

```bash
npm create vite@latest frontend-project -- --template react
```

Move into project:

```bash
cd frontend-project
```

Install dependencies:

```bash
npm install
npm install axios react-router-dom
```

---

# Step 2: Install Tailwind CSS

Install Tailwind:

```bash
npm install tailwindcss @tailwindcss/vite
```

---

# Step 3: Configure Vite

Open:

```text
vite.config.js
```

Replace with:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

Explanation:

* defineConfig() configures Vite.
* react() enables React support.
* tailwindcss() enables Tailwind CSS.

---

# Step 4: Configure CSS

Open:

```text
src/index.css
```

Delete everything.

Add:

```css
@import "tailwindcss";
```

Explanation:

This loads all Tailwind utility classes.

Examples:

```html
bg-blue-600
text-white
p-4
rounded
```

---

# Step 5: Verify main.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Explanation:

* App component is loaded.
* index.css is imported.
* React renders inside root div.

---

# Step 6: Create Routing

Open App.jsx

```jsx
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
```

Explanation:

* "/" loads Login page.
* "/employee" loads Employee page.
* "/department" loads Department page.
* "/salary" loads Salary page.
* "/reports" loads Reports page.



---

# Step 7: Navbar Component

Purpose:

Allow navigation between pages.

Navbar.jsx:

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/employee">Employee</Link>
      <Link to="/department">Department</Link>
      <Link to="/salary">Salary</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/">Logout</Link>
    </nav>
  );
}

export default Navbar;
```

Explanation:

Link works like an HTML anchor but without refreshing the page.

---

# Step 8: Login Page

Purpose:

Allow user authentication.

Fields:

* Username
* Password
* Login Button

Example:

```jsx
<input type="text" />
<input type="password" />
<button>Login</button>
```

Examiner checks:

* Form exists
* JSX used
* Function component created

---

# Step 9: Employee Page

Purpose:

Register employees.

Fields:

* FirstName
* LastName
* Position
* Address
* Telephone
* Gender
* HiredDate
* DepartmentCode

Button:

```jsx
Save Employee
```

Operation:

POST

---

# Step 10: Department Page

Purpose:

Register departments.

Fields:

* DepartmentCode
* DepartmentName
* GrossSalary
* TotalDeduction

Button:

```jsx
Save Department
```

Operation:

POST

---

# Step 11: Salary Page

Purpose:

Manage salary records.

Fields:

* EmployeeNumber
* DepartmentCode
* GrossSalary
* TotalDeduction
* NetSalary
* Month

Buttons:

```text
Save
Update
Delete
```

Operations:

POST
PUT
DELETE
GET



---

# Step 12: Reports Page

Purpose:

Display payroll report.

Columns:

```text
FirstName
LastName
Position
Department
NetSalary
```

Usually displayed in a table.

---

# Step 13: Axios Connection

Install:

```bash
npm install axios
```

Example:

```js
import axios from "axios";
```

Insert Data:

```js
await axios.post(
  "http://localhost:5000/department",
  data
);
```

Get Data:

```js
await axios.get(
  "http://localhost:5000/department"
);
```

Update:

```js
await axios.put(
  "http://localhost:5000/salary/1",
  data
);
```

Delete:

```js
await axios.delete(
  "http://localhost:5000/salary/1"
);
```

---

# Running the Project

Frontend:

```bash
npm run dev
```

Expected:

```text
http://localhost:5173
```

Backend:

```bash
npm run dev
```

Expected:

```text
Database Connected
Server Running
```

---

# Exam Checklist

Before presenting:

✓ Login page works

✓ Navbar works

✓ Employee page works

✓ Department page works

✓ Salary page works

✓ Reports page works

✓ Axios connected

✓ CRUD works

✓ Tailwind working

✓ Routes working

✓ Payroll report displayed

If all items above work, you will cover most of the frontend marks in the EPMS practical exam.
