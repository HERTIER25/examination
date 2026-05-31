import Navbar from "../components/Navbar";

function Reports() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">

        <h2 className="text-2xl font-bold mb-6">
          Monthly Payroll Report
        </h2>

        <table className="w-full border">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="border p-2">First Name</th>
              <th className="border p-2">Last Name</th>
              <th className="border p-2">Position</th>
              <th className="border p-2">Department</th>
              <th className="border p-2">Net Salary</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td className="border p-2">John</td>
              <td className="border p-2">Doe</td>
              <td className="border p-2">Mechanic</td>
              <td className="border p-2">MC</td>
              <td className="border p-2">410000</td>
            </tr>

          </tbody>

        </table>

      </div>
    </>
  );
}

export default Reports;