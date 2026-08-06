import { Link } from "react-router";

function Navigation() {
  return (
    <div className="flex flex-col ss:items-center ss:justify-center md:items-start">
      <span className="text-primary-orange ">NAVIGATION</span>
      <ul>
        <li>
          <Link to="Work">Work</Link>
        </li>
        <li>
          <Link to="services">Services</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="process">Process</Link>
        </li>
        <li>
          <Link to="insights">Insights</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
