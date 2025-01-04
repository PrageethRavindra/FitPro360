import { Card, Button } from '@nextui-org/react';

const PlansClasses = () => {
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
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Plans & Classes</h1>
        </header>
        <section className="mb-8">
          <h2 className="text-2xl mb-4">Plans</h2>
          <div className="grid grid-cols-3 gap-4">
            <Card className="p-4">
              <h3 className="text-xl font-bold">Member</h3>
              <p className="text-lg">2000 LKR</p>
            </Card>
            <Card className="p-4">
              <h3 className="text-xl font-bold">Plus</h3>
              <p className="text-lg">2000 LKR</p>
            </Card>
            <Card className="p-4">
              <h3 className="text-xl font-bold">Gold</h3>
              <p className="text-lg">2000 LKR</p>
            </Card>
          </div>
        </section>
        <section>
          <h2 className="text-2xl mb-4">Classes</h2>
          <div className="grid grid-cols-3 gap-4">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Card className="p-4" key={i}>
                  <h3 className="text-lg font-bold">Beginner BOX FIT</h3>
                  <p className="text-sm">Saturday, 2:00 PM - 5:00 PM</p>
                </Card>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default PlansClasses;
