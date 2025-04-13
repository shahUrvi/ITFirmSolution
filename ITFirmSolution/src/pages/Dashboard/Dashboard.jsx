import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard</h2>
      <p>Here's a quick overview of your account and activities.</p>

      <div className="dashboard-widgets">
        <div className="widget">
          <h3>Projects</h3>
          <p>5 Active Projects</p>
        </div>

        <div className="widget">
          <h3>Messages</h3>
          <p>12 New Messages</p>
        </div>

        <div className="widget">
          <h3>Tasks</h3>
          <p>7 Pending Tasks</p>
        </div>

        <div className="widget">
          <h3>Notifications</h3>
          <p>3 New Alerts</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
