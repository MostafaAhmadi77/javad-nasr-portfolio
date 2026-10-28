import {  NavLink } from "react-router";
import headerData from "../../../data/headerData";
import { prefetchRoute } from "../../../utils/prefetchRoutes";

function Navigation() {
  return (
    <div className="flex flex-col ss:items-center ss:justify-center md:items-start">
      <span className="text-primary-orange ">NAVIGATION</span>
      <ul>
       
{headerData.map(x=>(
  <li>
    <NavLink key={x.id} to={x.path}  className={(x)=>x.isActive ? 'text-primary-orange' :''} onMouseEnter={()=>prefetchRoute(x.path)} onFocus={()=>prefetchRoute(x.path)}>{x.title}</NavLink>
  </li>
))}

      </ul>
    </div>
  );
}

export default Navigation;
