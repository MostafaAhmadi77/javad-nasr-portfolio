import {  NavLink } from "react-router";

function Navigation() {
  return (
    <div className="flex flex-col ss:items-center ss:justify-center md:items-start">
      <span className="text-primary-orange ">NAVIGATION</span>
      <ul>
        <li>
          <NavLink className={(x)=>x.isActive ? 'text-primary-orange' :''} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={(x)=>x.isActive ? 'text-primary-orange' :''} to="/caseStudies">CaseStudies</NavLink>
        </li>
        <li>
          <NavLink className={(x)=>x.isActive ? 'text-primary-orange' :''} to="about">Services</NavLink>
        </li>
        <li>
          <NavLink className={(x)=>x.isActive ? 'text-primary-orange' :''} to="process">Process</NavLink>
        </li>
        <li>
          <NavLink className={(x)=>x.isActive ? 'text-primary-orange' :''} to="insights">Insights</NavLink>
        </li>
        <li>
          <NavLink className={(x)=>x.isActive ? 'text-primary-orange' :''} to="about">About</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
