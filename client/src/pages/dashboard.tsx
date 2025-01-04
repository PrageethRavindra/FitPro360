import { Button } from '@nextui-org/react';

const DashboardHome = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-[#0a0a3c] text-white flex flex-col items-center py-8">
        <div className="mb-10">
          <img src="/logo.png" alt="Minator Logo" className="w-12 h-12" />
        </div>
        <nav className="flex flex-col space-y-6">
          <a href="#" className="text-xl">
            🏠
          </a>
          <a href="#" className="text-xl">
            📋
          </a>
          <a href="#" className="text-xl">
            📊
          </a>
          <a href="#" className="text-xl">
            ⚙️
          </a>
        </nav>
        <div className="mt-auto">
          <img src="/profile.png" alt="Profile" className="w-10 h-10 rounded-full" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-green-600 text-2xl font-bold">LKR 218,740.00</p>
        </header>
        <div className="grid grid-cols-4 gap-4">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-gray-600">Total Members</h2>
            <p className="text-3xl font-bold">012</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-gray-600">Total Trainers</h2>
            <p className="text-3xl font-bold">564</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-gray-600">Active Classes</h2>
            <p className="text-3xl font-bold">021</p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <img src="/logo-large.png" alt="Minator" className="w-80" />
        </div>

        <div className="mt-8 flex space-x-4">
          <Button>Add Plans</Button>
          <Button>Add Classes</Button>
          <Button>Add Trainers</Button>
          <Button>Add Members</Button>
        </div>
      </main>
    </div>
  );
};

export default DashboardHome;
