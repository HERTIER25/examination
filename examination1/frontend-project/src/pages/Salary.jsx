import Navbar from "../components/Navbar";

function Salary() {
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">

        <h2 className="text-2xl font-bold mb-6">
          Salary Management
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            className="border p-2 rounded"
            placeholder="Employee Number"
          />

          <input
            className="border p-2 rounded"
            placeholder="Department Code"
          />

          <input
            className="border p-2 rounded"
            placeholder="Gross Salary"
          />

          <input
            className="border p-2 rounded"
            placeholder="Total Deduction"
          />

          <input
            className="border p-2 rounded"
            placeholder="Net Salary"
          />

          <input
            className="border p-2 rounded"
            placeholder="Month"
          />

        </div>

        <div className="mt-4 flex gap-3">

          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Save
          </button>

          <button className="bg-yellow-500 text-white px-4 py-2 rounded">
            Update
          </button>

          <button className="bg-red-600 text-white px-4 py-2 rounded">
            Delete
          </button>

        </div>

      </div>
    </>
  );
}

export default Salary;