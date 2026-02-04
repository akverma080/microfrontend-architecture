import React, { Suspense } from "react";

const Dashboard = React.lazy(() => import("dashboard/Dashboard"));

function App() {
  return (
    <Suspense fallback={<div>Loading remote dashboard...</div>}>
      <h1>🏠 Host Application</h1>
      <Dashboard />
    </Suspense>
  );
}

export default App;
