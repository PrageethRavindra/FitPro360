import { Button, Input } from "@nextui-org/react";

const Members = () => {
  const members = [
    { id: "101", name: "John Doe", email: "johndoe@example.com" },
    { id: "102", name: "Jane Doe", email: "janedoe@example.com" },
    { id: "103", name: "Sam Smith", email: "samsmith@example.com" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-[#0a0a3c] text-white flex flex-col items-center py-8">
        <div className="mb-10">
          <img src="/logo.png" alt="Minator Logo" className="w-12 h-12" />
        </div>
        <nav className="flex flex-col space-y-6">
          <a href="#" className="text-xl">🏠</a>
          <a href="#" className="text-xl">📋</a>
          <a href="#" className="text-xl">📊</a>
          <a href="#" className="text-xl">⚙️</a>
        </nav>
        <div className="mt-auto">
          <img src="/profile.png" alt="Profile" className="w-10 h-10 rounded-full" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Members</h1>
          <p className="text-green-600 text-xl">Total Members: 564</p>
        </header>
        <div className="mb-4">
          <Input placeholder="Search Members" fullWidth />
        </div>
        <table className="min-w-full bg-white rounded-md shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-600">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{member.name}</td>
                <td className="py-2 px-4">{member.id}</td>
                <td className="py-2 px-4">{member.email}</td>
                <td className="py-2 px-4 flex space-x-2">
                  <Button size="sm" color="primary">Edit</Button>
                  <Button size="sm" color="success">View</Button>
                  <Button size="sm" color="error">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Members;
