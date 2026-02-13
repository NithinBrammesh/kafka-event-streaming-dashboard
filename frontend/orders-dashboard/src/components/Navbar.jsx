import { FaChartBar } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <FaChartBar className="nav-icon"/>
        <span className="nav-title">Kafka Orders Dashboard</span>
      </div>

      <div className="nav-right">
        <input placeholder="Search..." />
        <div className="profile">NB</div>
      </div>
    </div>
  );
}