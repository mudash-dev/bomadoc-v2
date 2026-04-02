export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-2">
          Jambo, Daktari!
        </h1>
        <p className="text-foreground/70">
          Welcome to your BomaDoc 2.0 command center.
        </p>
        
        {/* Placeholder for future Patient Cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
            <h3 className="font-semibold text-primary">Pending Appointments</h3>
            <p className="text-2xl font-bold mt-2">0</p>
          </div>
          <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
            <h3 className="font-semibold text-primary">Total Patients</h3>
            <p className="text-2xl font-bold mt-2">0</p>
          </div>
        </div>
      </div>
    </div>
  )
}