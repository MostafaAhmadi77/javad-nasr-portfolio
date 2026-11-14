
import { NavLink } from "react-router";
import headerData from "../../../data/headerData";
import { prefetchRoute } from "../../../utils/prefetchRoutes";

function Navigation() {
  return (
    <div className="flex flex-col items-center justify-center md:items-start">
      <span className="text-primary-orange">NAVIGATION</span>
      <ul>
        {headerData.map((x) => (
          <li key={x.id}>
            <NavLink
              to={x.path}
              className={({ isActive }) =>
                isActive ? "text-primary-orange" : ""
              }
              onMouseEnter={() => prefetchRoute(x.path)}
              onFocus={() => prefetchRoute(x.path)}
            >
              {x.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
