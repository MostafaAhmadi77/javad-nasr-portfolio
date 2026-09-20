import {  NavLink } from "react-router";
import headerData from "../../../data/headerData";

function Navigation() {
  return (
    <div className="flex flex-col ss:items-center ss:justify-center md:items-start">
      <span className="text-primary-orange ">NAVIGATION</span>
      <ul>
       
{headerData.map(x=>(
  <li>
    <NavLink key={x.id} to={x.path}  className={(x)=>x.isActive ? 'text-primary-orange' :''}>{x.title}</NavLink>
  </li>
))}

      </ul>
    </div>
  );
}

export default Navigation;
