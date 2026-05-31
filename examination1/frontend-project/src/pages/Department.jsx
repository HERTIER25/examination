import Navbar from "../components/Navbar";

function Department() {
  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto p-6">

        <h2 className="text-2xl font-bold mb-6">
          Department Registration
        </h2>

        <div className="space-y-4">

          <input
            className="border p-2 rounded w-full"
            placeholder="Department Code"
          />

          <input
            className="border p-2 rounded w-full"
            placeholder="Department Name"
          />

          <input
            className="border p-2 rounded w-full"
            placeholder="Gross Salary"
          />

          <input
            className="border p-2 rounded w-full"
            placeholder="Total Deduction"
          />

        </div>

        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">
          Save Department
        </button>

      </div>
    </>
  );
}

export default Department;